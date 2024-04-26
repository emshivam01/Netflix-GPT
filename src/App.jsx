import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./utils/firebase"; // Your Firebase configuration
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { addUser, removeUser } from "./utils/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

// Initialize Firebase outside of the component function
const firebaseApp = initializeApp(firebaseConfig);

function App() {
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { name, uid } = user;
        dispatch(addUser(name, uid));
        console.log(user, "24");
      } else {
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <Provider store={appStore}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;
