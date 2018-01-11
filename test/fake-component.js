export default class FakeComponent {

	props = {};
	state = {};
	fakeStore = null;

	constructor(fakeStore) {
		this.fakeStore = fakeStore;
		this.props = this.fakeStore.initialise(undefined,{}, this.updateProps);
	}

	dispatch = (action) => {
		this.props = this.fakeStore.dispatch(action);
	};

	updateProps = () => {
		this.props = this.fakeStore.state;
	};

	setState = (newState) => {
		Object.assign(this.state, newState);
	};

}