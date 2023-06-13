import firebase from "firebase";
import "firebase/database";
// import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

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

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();
// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider)
//     .then((user) => {
//       const name = user.user.displayName;
//       const email = user.user.email;
//       const photoURL = user.user.photoURL;
//       sessionStorage.setItem("name", name);
//       sessionStorage.setItem("Email", email);
//       sessionStorage.setItem("photoUrl", photoURL);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
