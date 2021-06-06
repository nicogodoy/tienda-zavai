import firebase from 'firebase'


  // const firebaseConfig = {
  //   apiKey: "AIzaSyBQClsIACkCE4vE-NUyQaoGZ4KmcDdDf1U",
  //   authDomain: "tienda-zavai.firebaseapp.com",
  //   projectId: "tienda-zavai",
  //   storageBucket: "tienda-zavai.appspot.com",
  //   messagingSenderId: "84624361001",
  //   appId: "1:84624361001:web:0df5813d4c6baa9e467e38",
  //   measurementId: "G-1MNR5L1RDD"
  // };

  export const firebaseConfig = {
    apiKey: "AIzaSyCb9YdktJcdsyO-IHMtLqq81nESinHmnyA",
    authDomain: "villanas-store.firebaseapp.com",
    databaseURL: "https://villanas-store-default-rtdb.firebaseio.com",
    projectId: "villanas-store",
    storageBucket: "villanas-store.appspot.com",
    messagingSenderId: "4701601781",
    appId: "1:4701601781:web:5ed423b11bd34528506abc",
    measurementId: "G-KT3NH3Q3FJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export default db;