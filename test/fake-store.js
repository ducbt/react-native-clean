import {globalStateReducer} from "../common/state/global-state-reducer";
import {InitialGlobalState} from "../common/state/initial-global-state";

export default class FakeStore {

	state = {};
	updateProps = [];

	initialise = (initialState, action, updateProps) => {
        this.state = InitialGlobalState.generate();
		this.updateProps.push(updateProps);
		return this.state;
	};

	dispatch = (action) => {
		this.state = globalStateReducer(this.state, action);
		this.updateProps.forEach((updateProp) => { updateProp();});
		return this.state;
	};

}