export async function getToken() {
	try {
		let token;

		const response = await fetch(process.env.API_URL + "/auth/login", {
			method: "POST"
		});

		const data = await response.json();
		token = data.authToken;

		return token;
	} catch (error) {
		console.log(error);
		return null;
	}
}
