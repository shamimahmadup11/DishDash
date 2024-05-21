
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj-l-J1AeLzFOmS0MrzlTpNzQRh7pYcLw",
  authDomain: "dishdash-6fc0e.firebaseapp.com",
  projectId: "dishdash-6fc0e",
  storageBucket: "dishdash-6fc0e.appspot.com",
  messagingSenderId: "767811817913",
  appId: "1:767811817913:web:545a62e97caa647d406668"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;