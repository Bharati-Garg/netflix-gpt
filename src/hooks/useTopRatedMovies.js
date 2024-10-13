import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
  //fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const data = await fetch(
      " https://api.themoviedb.org/3/movie/top_rated?US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
