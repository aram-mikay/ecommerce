import firebase from "firebase/app";
//brings in firebase util library
import "firebase/firestore";
//firebase DB
import "firebase/auth";
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

//storing user data in firestore db
//import CreateUserProfileDocument to app js and called in componentDidMount
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if null then exit
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //if user id doesn't exist in snapshot - exist is a prop provided by firebase QuerySnapshot
      //checks to see if snapshot of our user exists or not before execution

    //pulling displayname and email from our userauth obj
    const { displayName, email } = userAuth;

    //creating date object to keep track of when this was evoked
    const createdAt = new Date();

    try {
      //creating our user reference object by set method
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
    
    return userRef;
    //returning userRef just incase we need to use elsewhere - this is not what creates our userRef
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google authentication utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
