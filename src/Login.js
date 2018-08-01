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
import colors from './styles/colors';

export default class Login extends Component {
  static navigationOptions = {
    title: 'LOGIN',
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

  login() {
    firebase.auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      const user = firebase.auth().currentUser;
      const displayName = user.displayName;
      // const email = user.email;
      // const emailVerified = user.emailVerified;
      // const photoURL = user.photoURL;
      // const isAnonymous = user.isAnonymous;
      // const uid = user.uid;
      // const providerData = user.providerData;
      Alert.alert(`Welcome ${displayName}`);
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
          Login
        </Text>
        <TextInput
          style={styles.emailText}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'email'}
          placeholderTextColor={colors.white}
        />
        <TextInput
          style={styles.passwordText}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'password'}
          secureTextEntry
          placeholderTextColor={colors.white}
        />
        <TouchableHighlight
          onPress={() => this.login()}
        >
            <View style={styles.buttonLogin}>
              <Text style={styles.textButton}>
                Login
              </Text>
            </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ marginTop: 15 }}
          onPress={() => this.props.navigation.navigate('Register')}
        >
            <View style={styles.buttonRegister}>
              <Text style={styles.textButton}>
                Register
              </Text>
            </View>
        </TouchableHighlight>
        <View style={styles.boxForgot}>
          <Text
            style={styles.textButtonForgot}
            onPress={() => this.props.navigation.navigate('Forgot')}
          >
            Forgot Password?
          </Text>
        </View>
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
  buttonLogin: {
    height: 45,
    width: 300,
    backgroundColor: colors.accent,
    justifyContent: 'center',
  },
  buttonRegister: {
    height: 45,
    width: 300,
    backgroundColor: colors.accent,
    justifyContent: 'center',
  },
  boxForgot: {
    height: 45,
    width: 300,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    fontWeight: 'bold'
  },
  textButtonForgot: {
    textAlign: 'center',
    fontSize: 14,
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
  }
});
