import { useRoutes } from "react-router-dom";
import routers from "../routers";

function App() {
	const element = useRoutes(routers);
	console.log("1--element", element);
	return element;
}

export default App;
