import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvxbIUP7b0nTDmG9GG89gRbQDYI2Xw1nY",
  authDomain: "hoe-clothings.firebaseapp.com",
  projectId: "hoe-clothings",
  storageBucket: "hoe-clothings.appspot.com",
  messagingSenderId: "912426700530",
  appId: "1:912426700530:web:0600da20c0ec2fe9d44a6b",
  measurementId: "G-ZXZNYE3SDZ",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }
  return userRef;
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
