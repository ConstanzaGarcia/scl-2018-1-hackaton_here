/* Firebase Configuration */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyD89E9XVp3o6PCR7a1ILszy9ExpcNK_w-Y",
    authDomain: "voice-pet.firebaseapp.com",
    databaseURL: "https://voice-pet.firebaseio.com",
    projectId: "voice-pet",
    storageBucket: "voice-pet.appspot.com",
    messagingSenderId: "179273412230"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db
};