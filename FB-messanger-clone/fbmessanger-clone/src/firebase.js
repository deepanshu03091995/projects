import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDi6cCJzYtc8EaHgzSng5Yi1tNIa2_GUdk",
  authDomain: "facebook-messanger-clone-d8ac7.firebaseapp.com",
  projectId: "facebook-messanger-clone-d8ac7",
  storageBucket: "facebook-messanger-clone-d8ac7.appspot.com",
  messagingSenderId: "12409545512",
  appId: "1:12409545512:web:38adb94f527c8c81f1a61d",
});

const db = firebaseApp.firestore();

export default db;
