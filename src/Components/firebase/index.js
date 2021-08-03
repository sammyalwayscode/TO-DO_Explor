import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJtt6dMpcN9chXQ9Yhm9xBCrcZyuMddxI",
  authDomain: "todo-aaa.firebaseapp.com",
  projectId: "todo-aaa",
  storageBucket: "todo-aaa.appspot.com",
  messagingSenderId: "317084992217",
  appId: "1:317084992217:web:fa984b287614279cea34c8",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
