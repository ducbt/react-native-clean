import React, { Component } from 'react';
import {
	Button,
} from 'react-native';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import HomeComponent from "../home/home-component";
import SignInComponent from "../auth/sign-in/sign-in-component";



export default class AppComponent  extends Component {
	render() {

		const items = {
			Home: {screen: HomeComponent},
			SignIn: {screen: SignInComponent}
		};
		const topDrawer = DrawerNavigator(items);

		const AppNavigator = StackNavigator({
			Drawer: {screen: topDrawer},
		}, {
			navigationOptions: ({navigation}) => ({
				headerLeft: <Button onPress={() => {
					navigation.navigate('DrawerToggle')
				}} title="Menu"/>
			})
		});

		// AppNavigator

		return (
			<AppNavigator/>
		);
	}
}

