/** @format */


export const url = "http://localhost:3001/api/v1";
// export const url = "http://localhost:3001/api/v1";

export const setHeaders = () => {
	const headers = {
		headers: {
			"x-auth-token": localStorage.getItem("token"),
		},
	};

	return headers;
};
