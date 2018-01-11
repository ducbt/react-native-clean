import {globalStateReducer} from "../common/state/global-state-reducer";

export default class FakeStore {

	state = {};
	updateProps = [];

	initialise = (initialState, action, updateProps) => {

		this.state = globalStateReducer(initialState, action);
		this.updateProps.push(updateProps);
		return this.state;
	};

	dispatch = (action) => {
		this.state = globalStateReducer(this.state, action);
		this.updateProps.forEach((updateProp) => { updateProp();});
		return this.state;
	};



}