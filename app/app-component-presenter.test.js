import AppComponentPresenter from './app-component.presenter';
import SignInComponentPresenter from '../auth/sign-in/sign-in-presenter'
import FakeComponent from '../test/fake-component'
import ApiGateway from "../common/api-gateway";
import FakeStore from "../test/fake-store";
import StubGenerator from '../test/stub-generator'

let fakeStore = null;
let fakeSignInComponent = null;
let fakeAppComponent = null;
let signInPresenter = null;
let appComponentPresenter = null;

beforeEach(() => {
	fakeStore = new FakeStore();
	fakeSignInComponent = new FakeComponent(fakeStore);
	fakeAppComponent = new FakeComponent(fakeStore);
	signInPresenter = new SignInComponentPresenter(fakeSignInComponent.dispatch);
	appComponentPresenter = new AppComponentPresenter(fakeAppComponent.dispatch);
});

test('should load initial drawer menu', async () => {
	expect(fakeAppComponent.props.drawerItems).toEqual(['Home', 'SignIn']);
});

test('should add protected item to drawer when user logs in', async () => {

	ApiGateway.prototype.save = StubGenerator.successfulLogin();

	await signInPresenter.signIn(fakeSignInComponent);

	appComponentPresenter.load();

	expect(fakeAppComponent.props.drawerItems).toEqual(['Home', 'SignIn', 'Books']);

});

test('should not add protected item to drawer when user logs in', async () => {

	ApiGateway.prototype.save = StubGenerator.failedLogin();

	await signInPresenter.signIn(fakeSignInComponent);

	appComponentPresenter.load();

	expect(fakeAppComponent.props.drawerItems).toEqual(['Home', 'SignIn']);

});






