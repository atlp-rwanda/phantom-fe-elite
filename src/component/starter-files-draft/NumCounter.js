/** @format */

import React from "react";
// import "./counter.css";
import { increaseValue, decreaseValue } from "../../redux/actions/counterActions";
import { increaseValue, decreaseValue } from "../redux/actions/counterActions";
import { useSelector, useDispatch } from "react-redux";

const NumCounter = () => {
	const numberState = useSelector((state) => state.counterState.count);
	const dispatch = useDispatch();
	console.log(numberState);
	return (
		<div className="holder">
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
