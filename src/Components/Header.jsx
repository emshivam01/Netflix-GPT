import { Link, useLocation, useNavigate } from "react-router-dom";
import netflixLogo from "../assets/netflix-logo.png";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";

const Header = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);

  return (
    <div className="relative z-10 ">
      <div className="absolute flex justify-between items-center w-full px-5 py-6 md:px-16 lg:px-52">
        <img src={netflixLogo} alt="Netflix Logo" className="h-16 md:h-20" />

        {user && (
          <button
            className="bg-[#c11119] text-white text-sm md:text-base font-medium px-4 py-1.5 rounded-sm shadow-lg"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
