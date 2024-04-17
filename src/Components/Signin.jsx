import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showError, setShowError] = useState(null);

  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-55"></div>

      <form className="w-[400px] bg-black bg-opacity-75 absolute top-0 right-0 left-0 mx-auto mt-40 px-12 py-14 rounded-md  text-white  ">
        <h1 className="text-4xl font-semibold mb-10"> Sign in</h1>

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full px-4 py-3  text-lg border-[#c11119] font-medium  mb-8 rounded bg-transparent border "
          type=" email"
          placeholder="Email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="w-full px-4 py-3  text-lg border-[#c11119] font-medium  mb-8 rounded bg-transparent border "
          type="password"
          placeholder="Password"
        />

        {showError && (
          <p className="font-semibold text-red-600 text-base mb-4">
            {showError}
          </p>
        )}

        <button className="w-full  px-5 rounded-md text-xl font-medium  py-2 bg-[#c11119]">
          Sign up
        </button>
        <p className="mt-10 cursor-pointer">
          New to Netflix?
          <Link to="/signup">
            <span className="hover:underline font-medium"> Sign up now</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
