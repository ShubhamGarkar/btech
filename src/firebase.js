import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJb9_hfBFeOOY7cIcuNHcUemgulCqUOnk",
  authDomain: "jkfs-2b6a9.firebaseapp.com",
  projectId: "jkfs-2b6a9",
  storageBucket: "jkfs-2b6a9.appspot.com",
  messagingSenderId: "614003919210",
  appId: "1:614003919210:web:587e466d05cbbe6cbb3d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
