import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCihhJ4MrMHpq-znfAbaZDNDV_cIRbDIPs",
  authDomain: "signal-clone-431a0.firebaseapp.com",
  projectId: "signal-clone-431a0",
  storageBucket: "signal-clone-431a0.appspot.com",
  messagingSenderId: "369994636418",
  appId: "1:369994636418:web:879f27f274ae3d4db9289b",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
