// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeW70D7I1e7Xc9XNP6BeCWTXZr8aQBgN8",
  authDomain: "fir-app-aba73.firebaseapp.com",
  projectId: "fir-app-aba73",
  storageBucket: "fir-app-aba73.appspot.com",
  messagingSenderId: "645027198963",
  appId: "1:645027198963:web:d85311901a48a7a1e00486"
};

// Initialize Firebase

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase };