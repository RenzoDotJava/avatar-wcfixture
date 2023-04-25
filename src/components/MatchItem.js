const MatchItem = ({match}) => {
	return (
		<div className="border-b-2 pb-5">
			<div className="flex flex-row justify-between">
				<div>
					<img
						src={match.home_flag}
						className="rounded-full border-black border-2 h-8 w-10 md:h-12 md:w-16 lg:h-16 lg:w-20"
					/>
				</div>
				<div className="flex-1 flex flex-row justify-center relative">
					<div className="hidden sm:flex flex-1 items-center justify-end font-medium pe-5 box-border text-base md:text-xl">
						{match.home_team_en}
					</div>
					<div className="flex flex-row gap-2">
						<div className="flex items-center justify-center border-2 bg-slate-200 lg:w-10 md:w-8 w-6 font-bold md:text-lg lg:text-xl">
							{match.home_score}
						</div>
						<div className="flex items-center justify-center border-2 bg-slate-200 lg:w-10 md:w-8 w-6 font-bold md:text-lg lg:text-xl">
							{match.away_score}
						</div>
					</div>
					<div className="hidden sm:flex flex-1 items-center justify-start font-medium ps-5 box-border text-base md:text-xl">
						{match.away_team_en}
					</div>
				</div>

				<div>
					<img
						src={match.away_flag}
						className="rounded-full border-black border-2 h-8 w-10 md:h-12 md:w-16 lg:h-16 lg:w-20"
					/>
				</div>
			</div>
			<div className="text-center mt-2 font-medium text-base md:text-lg">
				{match.local_date}
			</div>
		</div>
	);
};

export default MatchItem;
