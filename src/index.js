<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './main.css'
import { store } from "./redux/store/store";
import { Provider } from "react-redux";
=======


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { store } from "./redux/store/store";
import { Provider } from "react-redux";

>>>>>>> ecd2377ae86d7b76b8330c637293d8a3a8aef964
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
