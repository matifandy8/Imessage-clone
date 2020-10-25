import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC7Sq_AjKuqejUbGLeUnknLftNeNAvrrBI",
  authDomain: "imessage-clone-b4e1d.firebaseapp.com",
  databaseURL: "https://imessage-clone-b4e1d.firebaseio.com",
  projectId: "imessage-clone-b4e1d",
  storageBucket: "imessage-clone-b4e1d.appspot.com",
  messagingSenderId: "707950403338",
  appId: "1:707950403338:web:d5d38220f13af8444d64f3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
