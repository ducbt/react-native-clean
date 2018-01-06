import {globalStateReducer} from "../common/state/global-state-reducer";

export default class FakeStore {

	state = {};

	initialise = (initialState, action) => {
		this.state = globalStateReducer(initialState, action);
		return this.state;
	};

	dispatch = (action) => {
		this.state = globalStateReducer(this.globalState, action);
		return this.state;
	};

}