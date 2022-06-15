/** @format */

import * as actionTypes from "../constants/action-types";
name: "user";
const initialState = {
	user: null,
};
export const authLoginReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SIGNIN:
			return {
				...state,
				count: state.count + 1,
			};
		default:
			return state;
	}
};
