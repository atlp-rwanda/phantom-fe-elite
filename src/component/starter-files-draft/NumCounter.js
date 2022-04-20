/** @format */

import React from "react";
// import "./counter.css";
<<<<<<< HEAD:src/component/starter-files-draft/NumCounter.js
import { increaseValue, decreaseValue } from "../../redux/actions/counterActions";
=======
import { increaseValue, decreaseValue } from "../redux/actions/counterActions";
>>>>>>> 411a8ad ( chore(setup): setup tailwind):src/component/NumCounter.js
import { useSelector, useDispatch } from "react-redux";

const NumCounter = () => {
	const numberState = useSelector((state) => state.counterState.count);
	const dispatch = useDispatch();
	console.log(numberState);
	return (
		<div className="holder josefinSans">
			<button className="btn" onClick={() => dispatch(increaseValue())}>
				Increase shhhhhhhjaaaddddddddd daskjashsfksah
			</button>
			<p>{numberState}</p>
			<button className="btn" onClick={() => dispatch(decreaseValue())}>
				Decrease
			</button>
		</div>
	);
};

export default NumCounter;
