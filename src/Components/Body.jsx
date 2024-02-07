const Body = () => {
  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-55"></div>

      <div className="absolute mt-80 top-0 right-0 left-0 text-white flex flex-col items-center">
        <h1 className="font-extrabold text-5xl mb-6">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-2xl mb-6">Watch anywhere. Cancel anytime</p>
        <p className="text-xl mb-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex gap-6 ">
          <input
            type="text"
            className="bg-black bg-opacity-55 w-96 px-6 text-base border border-red-900 placeholder:text-base font-normal"
            placeholder="Email address"
          />
          <button className="bg-[#c11119] text-xl font-semibold px-10 py-4 rounded-md">
            Get Started{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
