/** @format */

import React from "react";
// import "./counter.css";
import { increaseValue, decreaseValue } from "../../redux/actions/counterActions";
import { increaseValue, decreaseValue } from "../redux/actions/counterActions";
import { useSelector, useDispatch } from "react-redux";

const NumCounter = () => {
<<<<<<< HEAD:src/component/NumCounter.js
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
=======
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
  
>>>>>>> 5d6af3d98597acdadfe5a88d8ebe850f38f0187e:src/component/starter-files-draft/NumCounter.js
};

export default NumCounter;
