import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './src/Login.js';
import Register from './src/Register.js';
import Forgot from './src/Forgot.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <RootStack />;
  }
}

const RootStack = createStackNavigator(
  {
    Login,
    Register,
    Forgot,
  },
  {
    initialRouteName: 'Login',
  }
);
