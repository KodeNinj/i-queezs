import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import SelectGame from "./Pages/SelectGame";
import SelectLevel from "./Pages/SelectLevel";
import PlayEasy from "./Pages/PlayEasy";
import PlayTeen from "./Pages/PlayTeen";

const router = createBrowserRouter([
	{
		path: "/",
		element: <SelectGame />,
	},
	{
		path: "/selectgame",
		element: <SelectLevel />,
	},
	{
		path: "/playeasy",
		element: <PlayEasy />,
	},
	{
		path: "/playteen",
		element: <PlayTeen />,
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
