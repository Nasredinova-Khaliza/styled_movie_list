import React from "react";
import "./Button.module.css";
import css from 'styled-components'

const Button = ({ onClick, text, className }) => {
	const StyleButton = css.button`
		width: 200px;
		height: 45px;
		font-size: x-large;
		font-weight: 600;
		border: none;
		border-radius: 5px;
		background: rgb(70, 70, 211);
	`
	return (
		<div>
			<StyleButton className={className} onClick={onClick}>
				{text}
			</StyleButton>
		</div>
	);
};

export default Button;
