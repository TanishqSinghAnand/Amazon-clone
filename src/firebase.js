import firebase from 'firebase'
require('firebase/auth')

const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyDi2qLV_7W7C94i3HfJNOPovHIKmGvpEtA",
    authDomain: "clone-8c3a2.firebaseapp.com",
    databaseURL: "https://clone-8c3a2.firebaseio.com",
    projectId: "clone-8c3a2",
    storageBucket: "clone-8c3a2.appspot.com",
    messagingSenderId: "1090922807012",
    appId: "1:1090922807012:web:ef70e73985e57997a4f6f1",
    measurementId: "G-CQGZCMYKHN"
      
  });


  const auth = firebase.auth();
  
  export { auth };