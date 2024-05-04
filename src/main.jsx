import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Signup from "./Components/Signup";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./Components/Signin";
import Browse from "./Components/Browse.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
