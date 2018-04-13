import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppComponent from './app/app-component';
import store from './common/state/redux-store';

export default class App extends Component{
  render() {
    return (
        <Provider store={store}>
          <AppComponent/>
        </Provider>
    );
  }
}