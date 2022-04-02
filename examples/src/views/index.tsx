import { useState } from "react";
import { Link, Route, Routes, useParams, useRoutes } from "react-router-dom";
import About from "./about";
import Home from "./home/index";
import Messages from "./messages";
import Setting from "./setting.tsx";
import Layout from "../layout/index";
import NotFound from "./notFound";
import Courses from "./courses/inex";

function Course() {
	let { id } = useParams<"id">();
	return (
		<div>
			<h2>{id}</h2>
			<p>This is a great course. You're gonna love it!</p>
			<Link to="/courses">See all courses</Link>
		</div>
	);
}

function App() {
	let element = useRoutes([
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
				{
					path: "/courses",
					element: <Home />,
					children: [
						{ index: true, element: <Courses /> },
						{ path: "/courses/:id", element: <Course /> },
					],
				},
				{ path: "*", element: <NotFound /> },
			],
		},
		{ path: "setting", element: <Setting /> },
	]);

	return element;
}

export default App;
