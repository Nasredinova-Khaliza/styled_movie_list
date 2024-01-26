import React from "react";

const Input = ({ type, placeholder, value, className, setData  }) => {
	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(event) => {
					setData(event.target.value);
				}}
        className={className}
			/>
		</div>
	);
};

export default Input;
