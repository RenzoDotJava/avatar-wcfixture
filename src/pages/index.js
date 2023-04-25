export default function Home({groupInfo}) {
	//max-w-sm mx-auto
	return (
		<main className="h-screen bg-[#B52852] overflow-auto">
			<header className="flex w-full h-20 items-center justify-between box-border px-7">
				<div className="text-white text-xl md:text-4xl sm:text-3xl font-bold">
					FIXTURE
				</div>
				<div className="text-white text-xl md:text-4xl sm:text-3xl font-bold">
					Mundial Qatar 2022
				</div>
			</header>
			<div className="grid mt-5 box-border px-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
				{groupInfo.map((group) => (
					<div
						key={group.groupId}
						className="bg-white shadow-md rounded-md p-4 "
					>
						<div>Grupo {group.groupId}</div>
						<div>
							{group.teams.map((team) => (
								<div key={team.id}>
									<div>{team.name_en}</div>
									<div>
										<img src={team.flag} />
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</main>
	);
}

export async function getServerSideProps() {
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

	return {
		props: {
			groupInfo
		}
	};
}
