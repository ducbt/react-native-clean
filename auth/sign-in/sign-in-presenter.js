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

		//integration goes here

	}

}