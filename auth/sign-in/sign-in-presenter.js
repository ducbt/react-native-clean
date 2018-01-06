import UserRepository from '../user-repostiory'
import StorageGateway from "../../common/storage-gateway";

export default class SignInPresenter {
	dispatch = null;

	constructor(dispatch) {
		this.dispatch = dispatch;
	}

	getInitialState() {
		return {userName: '', password: ''};
	}

	load() {
		this.dispatch({
			type: 'INITSIGNIN', vm: () => {
				return {
					status: 'not-submitted',
					message: ''
				};
			}
		})
	}

	async signIn(componentContext) {
		let signInReqest = {userName: componentContext.state.userName, password: componentContext.state.password};
		let signInResponse = await new UserRepository().signIn(signInReqest);

		let signInModel = {};
		signInModel.status = signInResponse.status;
		signInModel.message = signInResponse.message;

		if (signInModel.status === 'submitted-success') {
			await StorageGateway.set('userToken', signInResponse.token);
			debugger;
			componentContext.props.navigation.navigate('Home');

		} else {
			this.dispatch({
				type: 'SIGNIN', model: signInModel, vm: (model) => {
					const viewModel = {
						status: model.status,
						message: model.message,
					};
					return viewModel;
				}
			});
		}


	}

}