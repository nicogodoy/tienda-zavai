import firebase from 'firebase'


  const firebaseConfig = {
    apiKey: "AIzaSyBQClsIACkCE4vE-NUyQaoGZ4KmcDdDf1U",
    authDomain: "tienda-zavai.firebaseapp.com",
    projectId: "tienda-zavai",
    storageBucket: "tienda-zavai.appspot.com",
    messagingSenderId: "84624361001",
    appId: "1:84624361001:web:0df5813d4c6baa9e467e38",
    measurementId: "G-1MNR5L1RDD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;