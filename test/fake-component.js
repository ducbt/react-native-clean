import {globalStateReducer} from '../common/state/global-state-reducer';

export default class FakeComponent {

	props = {};
	state = {};

	dispatch = (dispatch) => {
		this.props = globalStateReducer(this.props, dispatch);
	};

	setState = (newState) => {
		Object.assign(this.state, newState);
	};

	constructor() {
		this.props = globalStateReducer(undefined,{});
	}

}