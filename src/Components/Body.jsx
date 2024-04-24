import { HERO_POSTER } from "../utils/constants";

const Body = () => {
  return (
    <div className="relative">
      <img className="h-screen w-screen" src={HERO_POSTER} alt="bg-img" />
      <div className="absolute top-0 w-full h-full bg-black bg-opacity-55"></div>

      <div className="w-2/3 mx-auto absolute mt-72 top-0 right-0 left-0 text-white flex flex-col items-center">
        <h1 className="font-bold text-5xl  mb-6">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-2xl font-normal mb-6">
          Watch anywhere. Cancel anytime
        </p>
        <p className="text-xl font-normal mb-5">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex gap-6 ">
          <input
            type="text"
            className="bg-black bg-opacity-55 w-96 px-6 font-semibold text-base border border-red-900 placeholder:text-base rounded-md"
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
