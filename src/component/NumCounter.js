<<<<<<< HEAD
/** @format */

import React from "react";
import "./counter.css";
=======

import React from "react";
>>>>>>> 828a684842516364ea1b8895460ad0b3a9be3d11
import { increaseValue, decreaseValue } from "../redux/actions/counterActions";
import { useSelector, useDispatch } from "react-redux";

const NumCounter = () => {
	const numberState = useSelector((state) => state.counterState.count);
	const dispatch = useDispatch();
	console.log(numberState);
	return (
<<<<<<< HEAD
		<div className="holder">
=======
		<div className="holder josefinSans">
>>>>>>> 828a684842516364ea1b8895460ad0b3a9be3d11
			<button className="btn" onClick={() => dispatch(increaseValue())}>
				Increase
			</button>
			<p>{numberState}</p>
			<button className="btn" onClick={() => dispatch(decreaseValue())}>
				Decrease
			</button>
		</div>
	);
};

export default NumCounter;
