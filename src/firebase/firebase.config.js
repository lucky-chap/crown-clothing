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

// Take user auth object and store in databse
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // userAuth in this case refers to the authenticated user object, log to see in console
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  // .exists is a property on every snapshot
  // the snapshot is the actual data you want from userRef, (read the docs)
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // now create the user, or set the user
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('error creating user', err.message)
    }

  }

  // console.log(snapShot);
  return userRef;

}


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
