import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppComponent from "./app-component";
import store from './common/state/global-store';
import SignInPresenter from './auth/sign-in/sign-in-presenter'

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<AppComponent/>
			</Provider>
		)
	}
}

const x = SignInPresenter.getInitialState;