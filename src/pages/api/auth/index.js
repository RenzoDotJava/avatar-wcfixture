export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const response = await fetch(process.env.WC_API_URL + "/user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					name: process.env.USERNAME,
					email: process.env.EMAIL,
					password: process.env.PASSWORD,
					passwordConfirm: process.env.PASSWORD
				})
			});

			const data = await response.json();

			if (data.status === "success") {
				res.status(200).json({msg: "Usuario creado exitosamente."});
			} else {
				throw new Error(data.message);
			}
		} catch (error) {
			res.status(401).json({msg: error.message});
		}
	}
}
