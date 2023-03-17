import firebase from "firebase";
import "firebase/database";
const apiKey = `${process.env.REACT_APP_API_KEY}`;
const authDomain = `${process.env.REACT_APP_AUTHDOMAIN}`;
const databaseURL = `${process.env.REACT_APP_DATABASEURL}`;
const projectId = `${process.env.REACT_APP_PROJECTID}`;
const storageBucket = `${process.env.REACT_APP_STORAGEBUCKET}`;
const messagingSenderId = `${process.env.REACT_APP_MESSAGINGSENDERID}`;
const appId = `${process.env.REACT_APP_APPID}`;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
