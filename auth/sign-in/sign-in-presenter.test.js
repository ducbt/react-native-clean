import SignInPresenter from './sign-in-presenter';
import ApiGateway from '../../common/api-gateway';
import FakeComponent from '../../test/fake-component';
import StorageGateway from '../../common/storage-gateway';
import FakeStore from '../../test/fake-store';
import StubGenerator from '../../test/stub-generator';
import AppComponentPresenter from '../../home/home-presenter';

let fakeStore = null;
let fakeAppComponent = null;
let fakeSignInComponent = null;
let signInPresenter = null;
let appComponentPresenter = null;

beforeEach(() => {
  fakeStore = new FakeStore();
  fakeAppComponent = new FakeComponent(fakeStore);
  fakeSignInComponent = new FakeComponent(fakeStore);
  appComponentPresenter = new AppComponentPresenter(fakeAppComponent.dispatch);
  signInPresenter = new SignInPresenter(fakeSignInComponent.dispatch);
});

it('should set initial viewmodel', async() => {
  expect(fakeSignInComponent.props.signInViewModel).toEqual({});
});

it('should set initial state', async() => {
  const globalState = signInPresenter.getInitialState();
  expect(globalState).toEqual({userName: '', password: ''});
});

it('should load initial viewmodel', async() => {
  signInPresenter.load();
  expect(fakeSignInComponent.props.signInViewModel.status).
      toBe('not-submitted');
  expect(fakeSignInComponent.props.signInViewModel.message).toBe('');
});

it('successful sign-in', async() => {

  fakeSignInComponent.state = {userName: 'blah', password: 'blah_1'};
  ApiGateway.prototype.save = StubGenerator.successfulLogin();
  spyOn(ApiGateway.prototype, 'save').and.callThrough();
  spyOn(StorageGateway, 'set');

  await signInPresenter.signIn(fakeSignInComponent);

  expect(ApiGateway.prototype.save).
      toHaveBeenCalledWith({userName: 'blah', password: 'blah_1'});
  expect(fakeSignInComponent.props.signInViewModel.status).
      toBe('submitted-success');
  expect(fakeSignInComponent.props.signInViewModel.message).
      toBe('user signIn successful');
  expect(StorageGateway.set).toHaveBeenCalledWith('userToken', '123');

});

it('un-successful sign-in', async() => {

  fakeSignInComponent.state = {userName: 'blah', password: 'blah_1'};
  ApiGateway.prototype.save = StubGenerator.failedLogin();
  spyOn(StorageGateway, 'set');

  await signInPresenter.signIn(fakeSignInComponent);

  expect(fakeSignInComponent.props.signInViewModel.status).
      toBe('submitted-failed');
  expect(fakeSignInComponent.props.signInViewModel.message).
      toBe('user signIn failed');
  expect(StorageGateway.set).not.toHaveBeenCalled();

});







