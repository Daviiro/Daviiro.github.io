import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/app-privacy-policy",
		element: <PrivacyPolicy />,
	},
]);

ReactDOM.render(
	<RouterProvider router={router} />,
	document.getElementById("root")
);
