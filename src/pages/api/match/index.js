import {getToken} from "@/utils/token";

export default async function handler(req, res) {
	if (req.method === "GET") {
		try {
			const token = await getToken(req);

			const response = await fetch(process.env.WC_API_URL + "/match", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				}
			});

			const data = await response.json();

			const groupedMatchs = data.data.reduce((groups, match) => {
				if (["R16", "QR", "semi", "3RD", "FIN"].includes(match.group))
					return groups;
				if (groups[match.group] === undefined) {
					groups[match.group] = [];
				}
				groups[match.group].push(match);
				return groups;
			}, {});

			res.status(200).json({matchs: groupedMatchs});
		} catch (error) {
			res.status(400).json({
				msg: error.message
			});
		}
	}
}
