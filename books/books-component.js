import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput
} from 'react-native';

export default class HomeComponent extends Component {
	static navigationOptions = {
		title: 'Books'
	};

	render() {
		return (
			<View style={styles.container}>


				<View style={styles.subContainer}>

					<Text>I am the home component</Text>
					
				</View>

			</View>
		);
	}
}

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