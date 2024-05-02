import { useEffect } from "react";
import Header from "./Header";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";

const Browse = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          options
        );
        const movies = await response.json();
        // Do something with the fetched movies
        console.log(movies);
      } catch (error) {
        // Handle errors
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
