import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBJrO_0YwwGENmrq42V2WiMgt0u8Hh2In0",
    authDomain: "task-firebase-415d6.firebaseapp.com",
    projectId: "task-firebase-415d6",
    storageBucket: "task-firebase-415d6.appspot.com",
    messagingSenderId: "44524005121",
    appId: "1:44524005121:web:137e605527c703ac4ddd00"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.firestore() 
  export default database  