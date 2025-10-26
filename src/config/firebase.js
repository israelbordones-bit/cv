import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBK4bXYeepq2ZlsAyUDG4e-04MZkjeIyEQ",
  authDomain: "israel-bordones-cv.firebaseapp.com",
  projectId: "israel-bordones-cv",
  storageBucket: "israel-bordones-cv.firebasestorage.app",
  messagingSenderId: "796127029249",
  appId: "1:796127029249:web:0fc04e5409665a10ccf800",
  measurementId: "G-3XG53YJYW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);