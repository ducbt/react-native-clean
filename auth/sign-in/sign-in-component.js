import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import AutoWire from '../../common/auto-wire';
import SignInPresenter from './sign-in-presenter';
import {connect} from 'react-redux';

class SignInComponent extends Component{

  constructor(props) {
    super(props);
    this.state = this.props.getInitialState();
  }

  componentWillMount() {
    this.props.load();
  }

  render() {

    return (
        <View style={styles.container}>

          <Text style={{height: 40, borderColor: 'gray', width: 200}}>Please
            sign in</Text>

          <TextInput
              placeholder={'Enter Username'}
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                width: 200,
              }}
              onChangeText={(text) => this.setState({userName: text})}
              value={this.state.userName}
          />

          <TextInput
              secureTextEntry={true}
              placeholder={'Enter Password'}
              style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                width: 200,
              }}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
          />

          {
            this.props.signInViewModel.status === 'submitted-success' &&
            <Text>
              success
            </Text>
          }

          {
            this.props.signInViewModel.status === 'submitted-failed' &&
            <Text>
              {this.props.signInViewModel.message}
            </Text>
          }

          <Button
              title="Submit"
              onPress={() => this.props.signIn(this)}/>

        </View>
    );

  }

}

export default connect((state) => {
  return state;
}, (dispatch) => (AutoWire.wire(SignInPresenter, dispatch, ['signIn'])))(
    SignInComponent);

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignSelf: 'center',
  },
});



