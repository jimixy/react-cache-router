import React from "react";
import { Link, Outlet } from "react-router-dom";

interface PropsType {}

const Layout: React.FC<PropsType> = (props) => {
	return (
		<div>
			首页
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/courses">Courses</Link>
				</li>
				<li>
					<Link to="/setting">Setting</Link>
				</li>
				<li>
					<Link to="/nothing-here">Nothing Here</Link>
				</li>
			</ul>
			<hr />
			<Outlet />
		</div>
	);
};

export default Layout;
