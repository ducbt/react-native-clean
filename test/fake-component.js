import {globalStateReducer} from "../common/state/global-state-reducer";

export default class FakeComponent {

	props = {};
	state = {};
	fakeStore = null;

	constructor(fakeStore) {
		this.fakeStore = fakeStore;
		this.props = this.fakeStore.initialise(undefined,{});
	}

	dispatch = (action) => {
		this.props = this.fakeStore.dispatch(action);
	};


	setState = (newState) => {
		Object.assign(this.state, newState);
	};




}