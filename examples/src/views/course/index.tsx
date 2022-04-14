import React from "react";
import { Link, useParams } from "react-router-dom";

interface PropsType {}

const Course: React.FC<PropsType> = (props) => {
	let { id } = useParams<"id">();
	return (
		<div>
			<h2>{id}</h2>
			<p>This is a great course. You're gonna love it!</p>
			<Link to="/courses">See all courses</Link>
		</div>
	);
};

export default Course;
