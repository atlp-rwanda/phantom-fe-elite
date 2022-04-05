/** @format */

import React from "react";
import NumCounter from "./component/NumCounter";

const App = () => {

	return (
		<div>
			<button onClick={alert("Great Shot!")}>Take the shot!</button>
			<NumCounter />
		</div>
	);
};

export default App;
