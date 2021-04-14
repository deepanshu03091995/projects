import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAq3c56P8rlLhOuBqv9OVfSyz1UGr1FvYc",
  authDomain: "slack-clone-90851.firebaseapp.com",
  projectId: "slack-clone-90851",
  storageBucket: "slack-clone-90851.appspot.com",
  messagingSenderId: "496216131649",
  appId: "1:496216131649:web:086de0225238322fdc5ec0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
