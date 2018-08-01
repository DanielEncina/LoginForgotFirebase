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

export default class Forgot extends Component {
  static navigationOptions = {
    title: 'FORGOT',
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
    };
  }

  sendResetPasswors() {
    firebase.auth()
      .sendPasswordResetEmail(this.state.email)
      .then(() => {
        Alert.alert(`Por favor checka tu email ${this.state.email}`);
        // call service and logic of business
      })
      .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
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
          Forgot u password?
        </Text>
        <TextInput
          style={styles.emailText}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'Enter email'}
          placeholderTextColor={colors.white}
        />
        <TouchableHighlight
          onPress={() => this.sendResetPasswors()}
        >
            <View style={styles.buttonForgot}>
              <Text style={styles.textButton}>
                Send email now!
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
  buttonForgot: {
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
