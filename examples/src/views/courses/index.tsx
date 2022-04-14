import React from "react";
import { Link, Outlet } from "react-router-dom";

interface PropsType {}

const Courses: React.FC<PropsType> = (props) => {
	return (
		<div>
			<p>Please choose a course:</p>
			<nav>
				<ul>
					<li>
						<Link to="react-fundamentals">react-fundamentals</Link>
					</li>
					<li>
						<Link to="advanced-react">advanced-react</Link>
					</li>
					<li>
						<Link to="react-router">react-router</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>
	);
};

export default Courses;
