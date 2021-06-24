import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyDwVJsuW8HgscYLGWdBkZvrQxtYp3FiEgQ",
    authDomain: "react-crud-da93d.firebaseapp.com",
    databaseURL: "https://react-crud-da93d-default-rtdb.firebaseio.com",
    projectId: "react-crud-da93d",
    storageBucket: "react-crud-da93d.appspot.com",
    messagingSenderId: "196093715784",
    appId: "1:196093715784:web:a798deabb87343deeebf7d"
  };
  // Initialize Firebase
  var firebaseDb = firebase.initializeApp(firebaseConfig);

  export default firebaseDb.database().ref();