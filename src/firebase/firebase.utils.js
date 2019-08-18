

import firebase from 'firebase/app';
//brings in firebase util library
import 'firebase/firestore';
//firebase DB
import 'firebase/auth';
//firebase Auth


//taking SDK snippet from firebase and configuring

const config = {
    apiKey: "AIzaSyB8jzk32E06S5UebGDmv8iOFsAVE3VD5sY",
    authDomain: "ecommerce-db-d1237.firebaseapp.com",
    databaseURL: "https://ecommerce-db-d1237.firebaseio.com",
    projectId: "ecommerce-db-d1237",
    storageBucket: "",
    messagingSenderId: "952695661407",
    appId: "1:952695661407:web:a87be4fac59e5277"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//google authentication utility 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
