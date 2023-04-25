import {getToken} from "@/utils/token";

export default async function handler(req, res) {
	if (req.method === "GET") {
		try {
			const token = await getToken(req);

			const response = await fetch(process.env.WC_API_URL + "/team", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`
				}
			});

			const data = await response.json();

			const groupedTeams = data.data.reduce((groups, team) => {
				if (team.groups === "--") return groups;
				if (groups[team.groups] === undefined) {
					groups[team.groups] = [];
				}
				groups[team.groups].push(team);
				return groups;
			}, {});

			res.status(200).json({teams: groupedTeams});
		} catch (error) {
			res.status(400).json({
				msg: error.message
			});
		}
	}
}
