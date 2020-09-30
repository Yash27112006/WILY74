import * as firebase from 'firebase';
require ('@firebase/firestore');

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA3feSfLYSdNfEZOlDqtwnGqSl45Ar8C5c",
    authDomain: "wily-app-f75bc.firebaseapp.com",
    databaseURL: "https://wily-app-f75bc.firebaseio.com",
    projectId: "wily-app-f75bc",
    storageBucket: "wily-app-f75bc.appspot.com",
    messagingSenderId: "348328442999",
    appId: "1:348328442999:web:e5530fcb1dfccea6295a72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()