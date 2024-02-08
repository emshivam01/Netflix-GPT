import { Link } from "react-router-dom";
import netflixLogo from "../assets/netflix-logo.png";

const Header = () => {
  return (
    <div className="relative z-10">
      <div className="absolute flex justify-between items-center w-full px-72">
        <img src={netflixLogo} alt="Netflix Logo" className="h-20" />

        <Link to="/signup" className="">
          <button className="bg-[#c11119] text-white text-sm font-medium px-4 py-1 rounded-md shadow-lg">
            {" "}
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
