import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  //fetch Data from TMDB API and update store
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (store) => store.movies.popularMoviesMovies
  );
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?US&page=1",
      //"https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
