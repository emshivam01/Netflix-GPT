// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA3qNtBlRVaGFSPzp6xMCha8OeMAOanZ8g",
  authDomain: "netflixgpt-2a460.firebaseapp.com",
  projectId: "netflixgpt-2a460",
  storageBucket: "netflixgpt-2a460.appspot.com",
  messagingSenderId: "551645879253",
  appId: "1:551645879253:web:a4cb57eeb4ad5dd9923b5c",
  measurementId: "G-4LD4X0JMLV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
