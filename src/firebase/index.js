import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCCJ37E4P4DO9bsdOfGNGKb0fnSQp5wNHs",
  authDomain: "fir-villanas.firebaseapp.com",
  projectId: "fir-villanas",
  storageBucket: "fir-villanas.appspot.com",
  messagingSenderId: "336769654199",
  appId: "1:336769654199:web:b7fb6ec7472c5996bfdc32",
  measurementId: "G-F9PP09ETTX"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   const db = firebase.firestore();
  

  export default db;