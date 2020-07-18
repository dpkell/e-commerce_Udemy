import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Config object for firebase API
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

/* Asynchronous function that checks the Firebase Database if a user already exists within the database using a snapshot, if there is no
   entry within the database, add the user to the database. */
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user: ', error.message);
        }
    }

    return userRef;
};

// Initialize the app to firebase.
firebase.initializeApp(config);

// Declaration and export of auth() and firestore() functions to variables to be used elsewhere within the application.
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Declaration of sign-in with Google authorization using a google account.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

// Export of previous sign-in declaration as a parameter for auth() function.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
