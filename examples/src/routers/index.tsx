import About from "../views/about/index";
import Home from "../views/home/index";
import Messages from "../views/messages";
import Setting from "../views/setting.tsx";
import Layout from "../layout/Home";
import NotFound from "../views/notFound";
import Courses from "../views/courses";
import Course from "../views/course";

const routers = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{
				path: "/courses",
				element: <Courses />,
				children: [
					// { index: true, element: <Courses /> },
					{ path: "/courses/:id", element: <Course /> },
				],
			},
			{ path: "setting", element: <Setting /> },
			{ path: "*", element: <NotFound /> },
		],
	},
];

export default routers;
