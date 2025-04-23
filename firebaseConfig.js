// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAm_jyA7C9L0p6XI4SOu-hnQsF6gPd8iXw",
  authDomain: "aiquizapp-31644.firebaseapp.com",
  projectId: "aiquizapp-31644",
  storageBucket: "aiquizapp-31644.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "1:930089548086:android:8e08585138eedb3b9b9b97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);  // Firestore instance

export { app, auth, db };