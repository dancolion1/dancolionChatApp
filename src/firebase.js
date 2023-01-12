import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const auth = firebase.initializeApp ( {
    apiKey: "AIzaSyCE52rhj3iqhcSxZDXLFtR27Ku0LayrjO4",
    authDomain: "webchat-23c0d.firebaseapp.com",
    projectId: "webchat-23c0d",
    storageBucket: "webchat-23c0d.appspot.com",
    messagingSenderId: "300371900673",
    appId: "1:300371900673:web:c84410202037517990c300",
    measurementId: "G-CRQ7V272XK"
  }).auth(); 