import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXI7AsN_zJmWN13-coXPSd82QnvSktt3Q",
  authDomain: "doezprofile.firebaseapp.com",
  projectId: "doezprofile",
  storageBucket: "doezprofile.firebasestorage.app",
  messagingSenderId: "1080169571941",
  appId: "1:1080169571941:web:66b46c198cdf6610d1c88c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  signInWithEmailAndPassword,
  signOut
};