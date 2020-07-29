import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBuCCySsLe2tscrSw9Q07kupzeDDd2hcKQ',
  authDomain: 'react-firebase-auth-392e7.firebaseapp.com',
  databaseURL: 'https://react-firebase-auth-392e7.firebaseio.com',
  projectId: 'react-firebase-auth-392e7',
  storageBucket: 'react-firebase-auth-392e7.appspot.com',
  messagingSenderId: '211194483143',
  appId: '1:211194483143:web:61234996eca655496609e2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
