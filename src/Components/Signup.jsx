import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ValidateCredentials } from "../utils/validateCredentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { HERO_POSTER } from "../utils/constants";
import Header from "./Header";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const status = ValidateCredentials(email, password);

    if (status) return;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        navigate("/browse");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  };

  return (
    <div>
      <Header />
      <div className="relative ">
        <img className="h-screen w-screen" src={HERO_POSTER} alt="bg-img" />
        <div className="absolute top-0 w-full h-full bg-black bg-opacity-100 md:bg-opacity-65"></div>
        <form
          onSubmit={handleSignup}
          className="w-[350px] bg-black bg-opacity-75 absolute top-0 right-0 left-0 mx-auto mt-40 px-8 py-8  rounded-md  text-white  "
        >
          <h1 className="text-3xl font-medium mb-8"> Sign up</h1>

          <input
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3  text-base border-[#c11119] font-normal  mb-8 rounded bg-transparent border "
            type="text"
            placeholder="Name"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full px-4 py-3  text-base border-[#c11119] font-normal  mb-8 rounded bg-transparent border "
            type=" email"
            placeholder="Email "
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full px-4 py-3  text-base border-[#c11119] font-normal  mb-8 rounded bg-transparent border "
            type="password"
            placeholder="Password"
          />

          {showError && (
            <p className="font-semibold text-red-600 text-base mb-4">
              {showError}
            </p>
          )}

          <button className="w-full  px-5 rounded-md text-base font-medium  py-2 bg-[#c11119]">
            Sign up
          </button>
          <p className="mt-10 text-base cursor-pointer">
            Already registered?{" "}
            <Link to="/signin">
              <button className="hover:underline font-medium"> Sign in</button>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
