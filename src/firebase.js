import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ93UPVuVoF4o06VlutkA5YZXW5u0FAHc",
  authDomain: "ywait-2eeec.firebaseapp.com",
  projectId: "ywait-2eeec",
  storageBucket: "ywait-2eeec.appspot.com",
  messagingSenderId: "539277049460",
  appId: "1:539277049460:web:8ba1871ffb550eead31b21",
  measurementId: "G-L0RP3Z74N0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export const auth = firebase.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.SESSION)