import React from "react";
import css from"./MovieList.module.css";
import Movie from "../moviee/Movie";

const MovieList = ({ movies }) => {
	return (
		<div className={css.movieList}>
			{movies.map(({ id, name, img, year, genre }) => {
				return (
					<Movie key={id} name={name} img={img} year={year} genre={genre} />
				);
			})}
		</div>
	);
};

export default MovieList;
