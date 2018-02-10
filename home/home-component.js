import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput
} from 'react-native';
import HomePresenter from "./home-presenter";
import AutoWire from "../common/auto-wire";
import {connect} from "react-redux";

class HomeComponent extends Component {

	static navigationOptions = {
		title: 'Home'
	};

	componentDidMount() {

	}

	render() {

		console.log(this.props.homeViewModel);
		return (
			<View style={styles.container}>

				<View style={styles.subContainer}>

					<Text>I am the home component</Text>
					<Text>Signed-in status is = {this.props.homeViewModel.signedIn.toString()}</Text>

				</View>

			</View>
		);
	}
}

export default connect((state) => {
	return state;
}, (dispatch) => (AutoWire.wire(HomePresenter, dispatch, [])))(HomeComponent);

const styles = StyleSheet.create({
	container: {
		flex: 1,

	},
	subContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});