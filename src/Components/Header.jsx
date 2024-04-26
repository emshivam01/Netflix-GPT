import { Link, useLocation, useNavigate } from "react-router-dom";
import netflixLogo from "../assets/netflix-logo.png";
import { useSelector } from "react-redux";
import userSlice from "../utils/userSlice";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("signed out");
        navigate("/signin");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  return (
    <div className="relative z-10 ">
      <div className="absolute flex justify-between items-center w-full px-5 py-6 md:px-16 lg:px-52">
        <img src={netflixLogo} alt="Netflix Logo" className="h-16 md:h-20" />

        <Link
          to={location.pathname == "/signup" ? "/signin" : "/signup"}
          className=""
        >
          <button className="bg-[#c11119] text-white text-sm md:text-base font-medium px-4 py-1.5 rounded-sm shadow-lg">
            {location.pathname == "/signup" ? "Sign in" : "Sign up"}
          </button>
        </Link>

        <button
          className="bg-[#c11119] text-white text-sm md:text-base font-medium px-4 py-1.5 rounded-sm shadow-lg"
          onClick={handleSignout}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
