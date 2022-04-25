<<<<<<< HEAD
/** @format */
=======

>>>>>>> 828a684842516364ea1b8895460ad0b3a9be3d11

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
