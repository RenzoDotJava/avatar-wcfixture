import GroupCard from "@/components/GroupCard";

export default function Home({groupInfo}) {
	return (
		<main className="h-screen bg-[#B52852] overflow-auto pb-12">
			<header className="flex w-full h-20 items-center justify-between box-border px-7">
				<div className="text-white text-lg md:text-3xl lg:text-4xl font-bold">
					FIXTURE
				</div>
				<div className="text-white text-lg md:text-3xl lg:text-4xl font-bold">
					Mundial Qatar 2022
				</div>
			</header>
			{groupInfo.length !== 0 ? (
				<div className="grid mt-5 px-7 md:grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16">
					{groupInfo.map((group) => (
						<GroupCard key={group.groupId} group={group} />
					))}
				</div>
			) : (
				<div className="mt-24 text-center text-white font-medium text-xl md:text-4xl">Servicio no disponible actualmente</div>
			)}
		</main>
	);
}

export async function getServerSideProps() {
	try {
		const teamsData = await fetch(process.env.API_URL + "/team", {
			method: "GET"
		});
		const matchsData = await fetch(process.env.API_URL + "/match", {
			method: "GET"
		});

		const {teams} = await teamsData.json();
		const {matchs} = await matchsData.json();

		const groupKeys = Object.keys(matchs);

		const groupInfo = [];

		groupKeys.forEach((key) => {
			if (teams.hasOwnProperty(key) && matchs.hasOwnProperty(key)) {
				groupInfo.push({groupId: key, teams: teams[key], matchs: matchs[key]});
			}
		});

		groupInfo.sort((a, b) => a.groupId.localeCompare(b.groupId));

		return {
			props: {
				groupInfo
			}
		};
	} catch (error) {
		return {
			props: {
				groupInfo: []
			}
		};
	}
}
