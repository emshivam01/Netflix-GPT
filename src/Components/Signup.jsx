import React from "react";

const Signup = () => {
  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-55"></div>

      <form className="w-[400px] bg-black bg-opacity-75 absolute top-0 right-0 left-0 mx-auto mt-40 px-12 py-14 rounded-md  text-white  ">
        <h1 className="text-4xl font-semibold mb-10"> Sign up</h1>
        <input
          className="w-full px-4 py-3 text-xl font-semibold  mb-8 rounded bg-transparent border "
          type=" text"
          placeholder="Full name"
        />
        <input
          className="w-full px-4 py-3  text-xl font-semibold  mb-8 rounded bg-transparent border "
          type=" email"
          placeholder="Email address"
        />

        <input
          className="w-full px-4 py-3  text-xl font-semibold  mb-8 rounded bg-transparent border "
          type=" password"
          placeholder="Password"
        />
        <button className="w-full  px-5 rounded-md text-xl font-medium  py-4 bg-[#c11119]">
          Sign up
        </button>
        <p className="mt-10 cursor-pointer">
          Already registered?{" "}
          <span className="hover:underline font-medium"> Sign in</span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
