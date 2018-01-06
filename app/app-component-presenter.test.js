import AppComponentPresenter from './app-component.presenter';
import SignInComponentPresenter from '../auth/sign-in/sign-in-presenter'
import FakeComponent from '../test/fake-component'
import ApiGateway from "../common/api-gateway";
import StorageGateway from "../common/storage-gateway";

let fakeSignInComponent = null;
let fakeAppComponent = null;
let signInPresenter = null;
let appComponentPresenter = null;

beforeEach(() => {
	fakeSignInComponent = new FakeComponent();
	fakeAppComponent = new FakeComponent();
	signInPresenter = new SignInComponentPresenter(fakeSignInComponent.dispatch);
	appComponentPresenter = new AppComponentPresenter(fakeAppComponent.dispatch);
});

it('should only load non auth items into drawer menu', async() => {
	expect(fakeAppComponent.props.drawerItems).toEqual(['Home','SignIn']);
});

it('should add books option to drawer items when app is is logged in', async() => {

	let fakeStoreageStore = null;
	ApiGateway.prototype.save = () => {
		return Promise.resolve({
			"success": true,
			"message": "user signIn successful",
			"token" : "123"
		});
	};

	StorageGateway.set = (key, val) => { fakeStoreageStore = val;};
	StorageGateway.get = () => {return fakeStoreageStore;};

	await signInPresenter.signIn(fakeSignInComponent);

	appComponentPresenter.load();

	expect(fakeAppComponent.props.drawerItems).toEqual(['Home','SignIn','Books']);

});

fit('should NOT add books option to drawer items when app is is logged in', async() => {

	let fakeStoreageStore = null;
	ApiGateway.prototype.save = () => {
		return Promise.resolve({
			"success": false,
			"message": "user signIn failed"
		});
	};

	StorageGateway.set = (key, val) => { fakeStoreageStore = val;};
	StorageGateway.get = () => {return fakeStoreageStore};

	await signInPresenter.signIn(fakeSignInComponent);

	appComponentPresenter.load();

	//expect(fakeAppComponent.props.drawerItems).toEqual(['Home','SignIn']);

});






