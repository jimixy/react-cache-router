import { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import classes from "./index.module.css";

function Home() {
	const [count, setCount] = useState(0);
	return (
		<div className={classes.red}>
			<h1>Home</h1>
		</div>
	);
}

export default Home;
