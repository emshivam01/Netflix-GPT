import netflixLogo from "../assets/netflix-logo.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-72 ">
      <img src={netflixLogo} alt="Netflix Logo" className="h-14" />

      <div className="">
        <button className="bg-[#c11119] text-white px-4 py-1 rounded-md shadow-lg">
          {" "}
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Header;
