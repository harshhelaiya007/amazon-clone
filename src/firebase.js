// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0C7QsEgWSjB-K9F3dGVk0zfZv06i9DjY",
  authDomain: "clone-firebase-46fbc.firebaseapp.com",
  projectId: "clone-firebase-46fbc",
  storageBucket: "clone-firebase-46fbc.appspot.com",
  messagingSenderId: "698286887704",
  appId: "1:698286887704:web:6093bcd6c341337e4cc46d"
};

  // const firebaseApp = firebase.initializeApp(firebaseConfig)
  // const db = firebaseApp.firestore();
  // const auth = firebase.auth();

  // export {db , auth}
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Use these for db & auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };