import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./utils/firebase"; // Your Firebase configuration
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// Initialize Firebase outside of the component function
const firebaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
