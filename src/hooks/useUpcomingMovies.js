import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  //fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
