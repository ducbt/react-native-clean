import React, { Component } from 'react';
import {
	Button,
} from 'react-native';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import HomeComponent from "../home/home-component";
import SignInComponent from "../auth/sign-in/sign-in-component";
import AutoWire from "../common/auto-wire";
import {connect} from "react-redux";
import AppComponentPresenter from "./app-component.presenter";


let topDrawer = DrawerNavigator({
	Home: {screen: HomeComponent},
	SignIn: {screen: SignInComponent}
});

//

const AppNavigator = StackNavigator({
	Drawer: {screen: topDrawer},
}, {
	navigationOptions: ({navigation}) => ({
		headerLeft: <Button onPress={() => {
			navigation.navigate('DrawerToggle')
		}} title="Menu"/>
	})
});

class AppComponent  extends Component {


	componentWillMount() {
		console.log('component mounting');
	}

	render() {
		return (
			<AppNavigator/>
		);
	}
}

export default connect((state) => {
	return state;
}, (dispatch) => (AutoWire.wire(AppComponentPresenter, dispatch,[])))(AppComponent);

