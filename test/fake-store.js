import {globalStateReducer} from "../common/state/global-state-reducer";

export default class FakeStore {

	state = {};
	global = null;

	initialise = (initialState, action) => {
		console.log('blah');
		this.state = globalStateReducer(initialState, action);
		return this.state;
	};

	dispatch = (action) => {
		this.state = globalStateReducer(this.state, action);
		return this.state;
	};



}