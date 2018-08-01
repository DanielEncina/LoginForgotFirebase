import { AppRegistry, YellowBox } from 'react-native';
import firebase from 'firebase';
import App from './App';

import configFireBase from './src/config/firebase.js';

const config = {
  apiKey: configFireBase.apiKey,
  authDomain: configFireBase.authDomain,
  databaseURL: configFireBase.databaseURL,
  projectId: configFireBase.projectId,
  storageBucket: configFireBase.storageBucket,
  messagingSenderId: configFireBase.messagingSenderId
};
firebase.initializeApp(config);

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('loginForgotFirebase', () => App);
