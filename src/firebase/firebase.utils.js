import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDf0T0DP-bGS8oP9L4g9LZ-QwhDe3sBg1M",
  authDomain: "crwn-db-95fbf.firebaseapp.com",
  databaseURL: "https://crwn-db-95fbf.firebaseio.com",
  projectId: "crwn-db-95fbf",
  storageBucket: "crwn-db-95fbf.appspot.com",
  messagingSenderId: "812539130586",
  appId: "1:812539130586:web:1974a7b3f2b412ea05ebe3"
};


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  if (!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName, email, createdAt, ...additionalData
      })
    } catch (e) {
      console.log('error creation user', e.message)
    }
  }
  return userRef;
}
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
