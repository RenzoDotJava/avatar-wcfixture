const TeamItem = ({team}) => {
	return (
		<div
			className="flex flex-col items-center justify-evenly gap-2"
		>
			<div className="">
				<img
					src={team.flag}
					className="rounded-3xl border-black border-2 h-8 w-10 md:h-10 md:w-14 lg:h-12 lg:w-16"
				/>
			</div>
			<div className="font-bold text-sm md:text-xl text-center">
				{team.name_en}
			</div>
		</div>
	);
};

export default TeamItem;
