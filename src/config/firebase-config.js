import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAb8q7MzsBKuBnhXYIpKDhEhrBCC-SCwaw",
  authDomain: "codersmonkeys-299fe.firebaseapp.com",
  projectId: "codersmonkeys-299fe",
  storageBucket: "codersmonkeys-299fe.firebasestorage.app",
  messagingSenderId: "568239394175",
  appId: "1:568239394175:web:273b65ad5a243a64ad9e4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporter l'app pour l'utiliser ailleurs
export default app;