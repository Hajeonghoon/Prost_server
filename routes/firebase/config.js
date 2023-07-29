const firebase = require("firebase");

const firebaseConfig = {
    apiKey: "AIzaSyDKo3frTUJ81V3Iq7D_mnBQ9lYH6kX_4cw",
    authDomain: "prost-db.firebaseapp.com",
    projectId: "prost-db",
    storageBucket: "prost-db.appspot.com",
    messagingSenderId: "181145449091",
    appId: "1:181145449091:web:4ef189b505acef7aa421b6",
    measurementId: "G-JKPER4RHJY"
  };
  firebase.initializeApp(firebaseConfig)
let database = firebase.database();

module.exports = database;