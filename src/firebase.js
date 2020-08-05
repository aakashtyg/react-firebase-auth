import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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
export const firestore = firebase.firestore();

export const createUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email } = user;
    const { displayName } = additionalData;

    try {
      await userRef.set({
        displayName,
        email,
        createdAt: new Date(),
      });
    } catch (error) {
      console.log('Error in creating user', error);
    }
  }
};
