import React, { useState } from "react";
import css from './Moviees.module.css'
import NewMovie from "../newMovie/NewMovie";
import MovieList from "../movieList/MovieList";

const Moviees = () => {
	const [movies, setMovies] = useState([]);
	const [newMovie, setFilterMovie] = useState([]);
	const [moviesaAll, setAllMovies] = useState([]);
	return (
		<div>
			<NewMovie
				movies={movies}
				setMovies={setMovies}
				setFilterMovie={setFilterMovie}
				setAllMovies={setAllMovies}
			/>
			<MovieList movies={newMovie} moviesaAll={moviesaAll} />
		</div>
	);
};

export default Moviees;
