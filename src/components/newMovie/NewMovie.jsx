import React, { useState } from "react";
import css from "./NewMovie.module.css";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";
import styled from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	gap: 15px;
	padding: 40px;
`;

const NewMovie = ({ movies, setMovies, setFilterMovie, setAllMovies }) => {
	const [movieName, setMovieName] = useState("");
	const [movieImage, setMovieImage] = useState("");
	const [movieYear, setMovieYear] = useState("");
	const [movieGenre, setMovieGenre] = useState("");

	const addMovies = () => {
		if (
			movieName === "" ||
			movieImage === "" ||
			movieYear === "" ||
			movieGenre === ""
		) {
			alert("Пожалуйста, заполните пустые инпуты.");
		} else {
			const newMovie = {
				name: movieName,
				img: movieImage,
				year: movieYear,
				genre: movieGenre,
				id: Math.random(),
			};
			setMovies([...movies, newMovie]);
			setFilterMovie([...movies, newMovie]);
			setAllMovies([...movies, newMovie]);
			setMovieName("");
			setMovieImage("");
			setMovieYear("");
			setMovieGenre("");
		}
	};

	const filterMovies = (genre) => {
		const upMovieFilter = movies.filter((item) => item.genre === genre);
		setFilterMovie(upMovieFilter);
	};

	const moviesaAll = (e) => {
		const dateMovie = e;

		if (dateMovie === "Все") {
			setFilterMovie([...movies]);
		} else {
			const updateMovie = movies.filter((item) => item.genre === dateMovie);
			setAllMovies([...updateMovie]);
		}
	};
	return (
		<>
			<div className={css.filterButton}>
				<Button
					className={css.button1}
					onClick={() => moviesaAll("Все")}
					text="Все"
				/>
				<Button
					className={css.button2}
					onClick={() => filterMovies("Комедия")}
					text="Комедия"
				/>
				<Button
					className={css.button3}
					onClick={() => filterMovies("Дорама")}
					text="Дорама"
				/>
				<Button
					className={css.button4}
					onClick={() => filterMovies("Ужастик")}
					text="Ужастик"
				/>
				<Button
					className={css.button5}
					onClick={() => filterMovies("Боевик")}
					text="Боевик"
				/>
			</div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
					addMovies();
				}}>
				<StyledDiv>
					<Input
						className={css.movieName}
						placeholder="movie name"
						type="text"
						value={movieName}
						setData={setMovieName}
					/>
					<Input
						className={css.movieImage}
						placeholder="movie image"
						type="text"
						value={movieImage}
						setData={setMovieImage}
					/>
					<Input
						className={css.movieYear}
						placeholder="movie year"
						type="text"
						value={movieYear}
						setData={setMovieYear}
					/>
					<Input
						className={css.movieGenre}
						placeholder="movie genre"
						type="text"
						value={movieGenre}
						setData={setMovieGenre}
					/>
				</StyledDiv>

				<div className={css.buttons}>
					<Button className={css.button6} type="submit" text="save" />
				</div>
			</form>
		</>
	);
};

export default NewMovie;
