import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBCwONysx-JVW4-XrNKJjwGFjTP1uryUjo",
    authDomain: "react-clothes.firebaseapp.com",
    databaseURL: "https://react-clothes.firebaseio.com",
    projectId: "react-clothes",
    storageBucket: "react-clothes.appspot.com",
    messagingSenderId: "98299107838",
    appId: "1:98299107838:web:930b9f658e473097e088af",
    measurementId: "G-Z5W99SYK54"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log("error creating ", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
