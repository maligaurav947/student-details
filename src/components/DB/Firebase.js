import firebase from "firebase";
import "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCuRr45PaGlbs8U-X4WwuZJeaCRlxHmuzo",
  authDomain: "student-details-8ac93.firebaseapp.com",
  databaseURL: "https://student-details-8ac93-default-rtdb.firebaseio.com",
  projectId: "student-details-8ac93",
  storageBucket: "student-details-8ac93.appspot.com",
  messagingSenderId: "464172168270",
  appId: "1:464172168270:web:c5fe33bc6432ce2c5abf1f",
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
