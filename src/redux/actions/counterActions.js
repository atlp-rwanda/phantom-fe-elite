/** @format */

import * as actionTypes from "./../constants/action-types";

export const increaseValue = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decreaseValue = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};
