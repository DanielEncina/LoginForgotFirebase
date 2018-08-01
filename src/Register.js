import React, { Component } from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import firebase from 'firebase';

import colors from './styles/colors.js';

export default class Register extends Component {
  static navigationOptions = {
    title: 'REGISTER',
    headerTintColor: colors.accent,
    headerStyle: {
      backgroundColor: colors.purple,
    },
    headerTitleStyle: {
      fontSize: 18,
      color: colors.white,
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submitRegister() {
    let errorCode;
    let errorMessage;
    firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        const user = firebase.auth().currentUser;
        user.sendEmailVerification().then(() => {
          // Email sent.
          Alert.alert('Successs... \n we send u a email for varification u email... !');
        }).catch((error) => {
          errorCode = error.code;
          errorMessage = error.message;
          Alert.alert(`Error sending email... ! : ${errorCode} - ${errorMessage}`);
        });
      })
      .catch((error) => {
      errorCode = error.code;
      errorMessage = error.message;
      Alert.alert(`Error... ! : ${errorCode} - ${errorMessage}`);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.purpleDark}
          barStyle="dark-content"
        />
        <Text style={styles.welcome}>
          Register
        </Text>
        <TextInput
          style={styles.emailText}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Email'}
          placeholderTextColor={colors.white}
        />
        <TextInput
          style={styles.passwordText}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry
          placeholderTextColor={colors.white}
        />
        <TouchableHighlight
          onPress={() => this.submitRegister()}
        >
            <View style={styles.buttonRegister}>
              <Text style={styles.textButton}>
                Register now
              </Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purple,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 100
  },
  emailText: {
    height: 50,
    width: 300,
    borderColor: colors.divider,
    color: colors.white
  },
  passwordText: {
    height: 50,
    width: 300,
    borderColor: colors.divider,
    color: colors.white
  },
  buttonRegister: {
    height: 45,
    width: 300,
    backgroundColor: colors.accent,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold'
  },
});
