import * as FirebaseCore from 'expo-firebase-core';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/functions';
import 'firebase/storage';

function initialiseFirebase() {
  const config = FirebaseCore.DEFAULT_WEB_APP_OPTIONS;

  // if (!firebase.app.length) {
  firebase.initializeApp(config as FirebaseCore.FirebaseOptions);
  // }
}

initialiseFirebase();
