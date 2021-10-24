import firebase from 'firebase/compat/app';
import "firebase/compat";
import "firebase/storage"

const Config = {
  apiKey: "AIzaSyDWXG_gcAe2kmTBoSqqNH3x_lR3DvE-DYo",
  authDomain: "tshirtapp-ccc2b.firebaseapp.com",
  projectId: "tshirtapp-ccc2b",
  storageBucket: "tshirtapp-ccc2b.appspot.com",
  messagingSenderId: "250627049869",
  appId: "1:250627049869:web:4b6af9685bd033644515c4",
  measurementId: "G-KRHK6TJ536"
};

// Initialize Firebase
firebase.initializeApp(Config);

const storage = firebase.storage();

export {
    storage  , firebase as default
};