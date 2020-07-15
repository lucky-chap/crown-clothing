import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDgVmw86p6UtV0TzXtLlYOhqaE62G99iu8",
    authDomain: "crwn-store-80dbb.firebaseapp.com",
    databaseURL: "https://crwn-store-80dbb.firebaseio.com",
    projectId: "crwn-store-80dbb",
    storageBucket: "crwn-store-80dbb.appspot.com",
    messagingSenderId: "68999376983",
    appId: "1:68999376983:web:8ea91e7c487aecd4a37312",
    measurementId: "G-1W6LKTHFTD"
  };

firebase.initializeApp(config);

// For access to authentication methods
export const auth = firebase.auth();
// For access to database
export const firestore = firebase.firestore();

// Setting up the Google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
// You can set custom parameter, in this case prompt: 'select_account'
// means to always trigger the Google pop-up whenever GoogleAuthProvider
// is used for authentication
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);






export default firebase;
