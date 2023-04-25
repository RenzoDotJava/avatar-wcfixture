import {getAuthToken, setAuthCookie} from "@/utils/cookies";

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			let authToken = getAuthToken(req);

			if (!authToken) {
				const response = await fetch(process.env.WC_API_URL + "/user/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: process.env.EMAIL,
						password: process.env.PASSWORD
					})
				});

				const data = await response.json();

				if (data.status === "success") {
					authToken = data.data.token;
					setAuthCookie(res, authToken);
				} else {
					throw new Error(data.message);
				}
			}

			res.status(200).json({authToken});
		} catch (error) {
			res.status(401).json({msg: error.message});
		}
	}
}
