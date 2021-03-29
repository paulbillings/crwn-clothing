import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBXgTxaJbF2KYysVn9yKUgcplfcn6ngl8o",
  authDomain: "crwn-db-fea86.firebaseapp.com",
  projectId: "crwn-db-fea86",
  storageBucket: "crwn-db-fea86.appspot.com",
  messagingSenderId: "156881516011",
  appId: "1:156881516011:web:b6c22f4fdbf59fe16c95ae",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
