import firebase from "firebase/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl8D6S9Q_6roTlEybatSdVAlMvGXWwWCs",
  authDomain: "rufitstore.firebaseapp.com",
  projectId: "rufitstore",
  storageBucket: "rufitstore.appspot.com",
  messagingSenderId: "529155020462",
  appId: "1:529155020462:web:cf2c765542c3230ad57f3f",
};

firebase.initializeApp(firebaseConfig);

export const getFirestore = () => firebase.firestore();
