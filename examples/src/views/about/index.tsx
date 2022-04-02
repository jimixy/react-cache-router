import React from "react";
import { Link } from "react-router-dom";

interface PropsType {}

const About: React.FC<PropsType> = (props) => {
	return (
		<div>
			关于
			<Link to="/setting/personal">personal</Link>
		</div>
	);
};

export default About;
