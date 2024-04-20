import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./utils/firebase"; // Your Firebase configuration

// Initialize Firebase outside of the component function
const firebaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
