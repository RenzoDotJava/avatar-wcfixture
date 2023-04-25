import {getAuthToken} from "./cookies";

export async function getToken(req) {
	try {
		let token = getAuthToken(req);
		if (!token) {
			const response = await fetch(process.env.API_URL + "/auth/login", {
				method: "POST"
			});

			const data = await response.json();
			token = data.authToken;
		}

		return token;
	} catch (error) {
		console.log(error);
		return null;
	}
}
