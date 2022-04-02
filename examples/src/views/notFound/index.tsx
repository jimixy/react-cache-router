import React from "react";
import { Link } from "react-router-dom";

interface PropsType {}

const notFound: React.FC<PropsType> = (props) => {
	return (
		<div>
			<h2>404...</h2>
			<p>
				<Link to="/">Go to the home page</Link>
			</p>
		</div>
	);
};

export default notFound;
