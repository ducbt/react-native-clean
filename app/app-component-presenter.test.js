import AppComponentPresenter from './app-component.presenter';
// import StorageGateway from "../../common/storage-gateway";
// import ApiGateway from '../../common/api-gateway'
import FakeComponent from '../test/fake-component'

let fakeComponent = null;
let signInPresenter = null;

beforeEach(() => {
	fakeComponent = new FakeComponent();
	signInPresenter = new AppComponentPresenter(fakeComponent.dispatch);
});

// it('should only load non auth items into drawer menu', async() => {
//
// 	console.log(fakeComponent.props)
// 	//expect(fakeComponent.props.drawerItems).toEqual(['Home','SignIn']);
// });





