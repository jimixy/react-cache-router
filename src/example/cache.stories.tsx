import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from "./more.module.css";
import { test } from "../index";
import Home from "./Home";
import About from "./About";

export const Hello = () => {
	const value = test("aqiu");
	console.log(value);
	return (
		<div className={classes.red}>
			<h1>{value}</h1>
			{/* <Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
			</Routes> */}
		</div>
	);
};
