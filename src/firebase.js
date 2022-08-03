import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDTd7Wk0X3fmfPfWjc7G6bHyJl5bhrimqo",
    authDomain: "linkedin-2-0-c067b.firebaseapp.com",
    projectId: "linkedin-2-0-c067b",
    storageBucket: "linkedin-2-0-c067b.appspot.com",
    messagingSenderId: "956675775767",
    appId: "1:956675775767:web:3dc5536d80326563c3ab52"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)


  const db = firebaseApp.firestore()


  const auth = firebase.auth()


  export { db, auth }