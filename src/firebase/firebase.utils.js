import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhaS9X5qA7KwnC-UvKKRPrJHGyirz6XzY",
    authDomain: "crown-db-dbbf4.firebaseapp.com",
    databaseURL: "https://crown-db-dbbf4.firebaseio.com",
    projectId: "crown-db-dbbf4",
    storageBucket: "crown-db-dbbf4.appspot.com",
    messagingSenderId: "19565892348",
    appId: "1:19565892348:web:c690ef87b40d5922b8fd79",
    measurementId: "G-Q1LR49PB5L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
