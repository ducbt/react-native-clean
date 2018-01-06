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
		title: 'Home'
	};

	render() {
		return (
			<View style={styles.container}>


				<View style={styles.subContainer}>

					<Text>I am the home component</Text>

					{/*<Button title="go to blah component" onPress={() => {*/}
						{/*this.props.navigation.navigate('Blah', {blah: 'some info'});*/}
					{/*}}>ss</Button>*/}

					{/*<Button title="open drawer" onPress={() => {*/}
						{/*this.props.navigation.navigate('DrawerOpen');*/}
					{/*}}>ss</Button>*/}

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