import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBw_QgAWUL7ya1gvgSLTLOB1mbsBtXHbUg",
    authDomain: "clone-7c326.firebaseapp.com",
    databaseURL: "https://clone-7c326.firebaseio.com",
    projectId: "clone-7c326",
    storageBucket: "clone-7c326.appspot.com",
    messagingSenderId: "801490244858",
    appId: "1:801490244858:web:76a7a719a88d22c4c82543",
    measurementId: "G-6CC8KGP5PK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db , auth};