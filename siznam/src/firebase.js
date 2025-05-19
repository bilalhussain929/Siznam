import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB3p7FW8Lm4BPEO8KSplgfm_tuDK5cuQHk",
  authDomain: "siznam-employee-record.firebaseapp.com",
  projectId: "siznam-employee-record",
  storageBucket: "siznam-employee-record.firebasestorage.app",
  messagingSenderId: "819302436319",
  appId: "1:819302436319:web:bbc34055dfbba6d30e486a",
  measurementId: "G-CW1YR5JZK6",
  databaseURL: "https://siznam-employee-record-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
