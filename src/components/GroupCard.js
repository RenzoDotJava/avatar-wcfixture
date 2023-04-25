import TeamItem from "./TeamItem";
import MatchItem from "./MatchItem";

const GroupCard = ({group}) => {
	return (
		<div key={group.groupId} className="bg-white shadow-md rounded-md p-4 lg:p-7">
			<div className="font-bold text-center text-base sm:text-xl md:text-2xl mb-5">
				GRUPO {group.groupId}
			</div>
			<div className="grid grid-cols-4 gap-5 flex-1 border-b-2 pb-5">
				{group.teams.map((team) => (
					<TeamItem key={team.id} team={team} />
				))}
			</div>
			<div className="flex flex-col  mt-5 gap-5">
				{group.matchs.map((match) => (
					<MatchItem key={match.id} match={match} />
				))}
			</div>
		</div>
	);
};

export default GroupCard;
