import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAL-h-uKcXwmT7Pr_0zw4BwOp85nJ899u0",
  authDomain: "me-tag.firebaseapp.com",
  projectId: "me-tag",
  storageBucket: "me-tag.appspot.com",
  messagingSenderId: "391037085257",
  appId: "1:391037085257:web:778397d703c78a3203c198",
  measurementId: "G-QM9SMK3MPF",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const db = getFirestore();
export default db;
