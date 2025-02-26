import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChwE85DvX3nZf-IvTC0KpZmS88zPBV8nQ",
  authDomain: "jay-bhavani-metal-corporation.firebaseapp.com",
  projectId: "jay-bhavani-metal-corporation",
  storageBucket: "jay-bhavani-metal-corporation.firebasestorage.app",
  messagingSenderId: "483360597889",
  appId: "1:483360597889:web:752db98edebabb3a826a80",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
