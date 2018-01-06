export default class AutoWire {

	static wire(presenterFunc, dispatch, maps) {
		let plainObject = {};

		let booksPresenter = new presenterFunc(dispatch);
		plainObject.getInitialState = booksPresenter.getInitialState;
		plainObject.load = booksPresenter.load;
		plainObject.dispatch = booksPresenter.dispatch;

		maps.forEach((propString) => {
			plainObject[propString] = booksPresenter[propString];
		});

		return plainObject;
	}

}