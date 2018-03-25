import React, {Component} from 'react';
import {
	Button,
} from 'react-native';
import {StackNavigator, DrawerNavigator} from "react-navigation";
import HomeComponent from "../home/home-component";
import SignInComponent from "../auth/sign-in/sign-in-component";
import AutoWire from "../common/auto-wire";
import {connect} from "react-redux";
import AppComponentPresenter from "../home/home-presenter";
import BooksComponent from '../books/books-component'

// let topDrawer = DrawerNavigator({
// 	Home: {screen: HomeComponent},
// 	SignIn: {screen: SignInComponent}
// });

// const AppNavigator = StackNavigator({
// 	Drawer: {screen: topDrawer},
// }, {
// 	navigationOptions: ({navigation}) => ({
// 		headerLeft: <Button onPress={() => {
// 			navigation.navigate('DrawerToggle')
// 		}} title="Menu"/>
// 	})
// });

let AppNavigator = null;

class AppComponent extends Component {

	componentWillMount() {}

	render() {

		let items = {
            'Home': {screen: HomeComponent},
            'SignIn': {screen: SignInComponent},
            'Books': {screen: BooksComponent}
        };
        // if(this.props.)
        //
        let topDrawer = DrawerNavigator(items);

        // let topDrawer = this.props.drawerItems.map( (book) => {
        	// return {book:{screen:eval(book + '')}}
		// });


        AppNavigator = StackNavigator({
            Drawer: {screen: topDrawer},
        }, {
            navigationOptions: ({navigation}) => ({
                headerLeft: <Button onPress={() => {
                    navigation.navigate('DrawerToggle')
                }} title="Menu"/>
            })
        });

	    console.log(this.props.drawerItems);

		return (
			<AppNavigator/>
		);
	}
}

export default connect((state) => {
    return state;
}, (dispatch) => (AutoWire.wire(AppComponentPresenter, dispatch, [])))(AppComponent);

