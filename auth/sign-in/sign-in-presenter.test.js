import SignInPresenter from './sign-in-presenter';
import ApiGateway from '../../common/api-gateway'
import FakeComponent from '../../test/fake-component'
import StorageGateway from "../../common/storage-gateway";
import FakeStore from "../../test/fake-store";

let fakeStore = null;
let fakeComponent = null;
let signInPresenter = null;

beforeEach(() => {
	fakeStore = new FakeStore();
	fakeComponent = new FakeComponent(fakeStore);
	signInPresenter = new SignInPresenter(fakeComponent.dispatch);
});

it('should set initial viewmodel into component', async() => {
	expect(fakeComponent.props.signInViewModel).toEqual({});
});

it('should set intial state', async() => {
	const globalState = signInPresenter.getInitialState();
	expect(globalState).toEqual({userName: '', password: ''});
});

it('should load initial viewmodel', async() => {
	signInPresenter.load();
	expect(fakeComponent.props.signInViewModel.status).toBe('not-submitted');
	expect(fakeComponent.props.signInViewModel.message).toBe('');
});

it('successful sign-in', async() => {

	//stub the boundary
	fakeComponent.state = {userName:'blah', password:'blah_1'};
	ApiGateway.prototype.save = () => {
		return Promise.resolve({
			"success": true,
			"message": "user signIn successful",
			"token" : "123"
		});
	};
	spyOn(ApiGateway.prototype,'save').and.callThrough();
	spyOn(StorageGateway,'set');

	await signInPresenter.signIn(fakeComponent);

	expect(ApiGateway.prototype.save).toHaveBeenCalledWith({userName:'blah', password:'blah_1'});
	expect(fakeComponent.props.signInViewModel.status).toBe('submitted-success');
	expect(fakeComponent.props.signInViewModel.message).toBe('user signIn successful');
	expect(StorageGateway.set).toHaveBeenCalledWith('userToken', '123');

});

it('un-successful sign-in', async() => {

	//stub the boundary
	fakeComponent.state = {userName:'blah', password:'blah_1'};
	ApiGateway.prototype.save = () => {
		return Promise.resolve({
			"success": false,
			"message": "user signIn failed"
		});
	};
	spyOn(StorageGateway,'set');

	await signInPresenter.signIn(fakeComponent);

	expect(fakeComponent.props.signInViewModel.status).toBe('submitted-failed');
	expect(fakeComponent.props.signInViewModel.message).toBe('user signIn failed');
	expect(StorageGateway.set).not.toHaveBeenCalled();

});



