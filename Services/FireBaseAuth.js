// Import the functions you need from the SDKs you need
import { initializeAuth, getAuth, browserSessionPersistence, setPersistence } from "firebase/auth";
import { initializeApp, getApps } from "firebase/app";
import { AsyncStorage } from 'react-native';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB30rU4et7qwSfsUdgBPVxgsmIqB7oZIIo",
  authDomain: "react-native-authenticat-cbf5f.firebaseapp.com",
  projectId: "react-native-authenticat-cbf5f",
  storageBucket: "react-native-authenticat-cbf5f.appspot.com",
  messagingSenderId: "97790733031",
  appId: "1:97790733031:web:40db3d8552e5cf2d409042"
};

// Initialize Firebase
let auth;
if (!getApps().length) {
  const app = initializeApp(firebaseConfig);
  auth = initializeAuth(app);
  // Set the persistence to 'LOCAL' for React Native
  setPersistence(auth, browserSessionPersistence);
} else {
  auth = getAuth();
}


export default auth;