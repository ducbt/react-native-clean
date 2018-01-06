import {globalStateReducer} from "../common/state/global-state-reducer";

export default class FakeStore {

	state = {};

	initialise = (initialState, action) => {
		this.state = globalStateReducer(initialState, action);
		return this.state;
	};

	dispatch = (action) => {
		this.state = globalStateReducer(this.state, action);
		return this.state;
	};

}