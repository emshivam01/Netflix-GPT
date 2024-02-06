const Body = () => {
  return (
    <div className="relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_large.jpg"
        alt="bg-img"
      />
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-55"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-white flex flex-col items-center gap-3">
        <h1 className="font-bold text-5xl">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-2xl">Watch anywhere. Cancel anytime</p>
        <p className="text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex gap-6">
          <input
            type="text"
            className="bg-transparent w-96 px-4 border"
            placeholder="Email address"
          />
          <button className="bg-[#c11119] px-10 py-4 rounded-md">
            Get Started{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
