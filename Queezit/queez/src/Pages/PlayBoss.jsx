import React from "react";
import Navbar from "../Components/Navbar";
import { CountriesCapitalBossObj } from "../Data/CountriesCapitalBossObj";
import Game from "../Components/Game";
import bg from "../Assets/design.png";
const PlayBoss = () => {
	return (
		<section className='bg-[var(--primaryBg)] h-[105vh] z-30 pb-[80px] overflow-auto'>
			<Navbar />
			<Game gameLevel={CountriesCapitalBossObj} />
			{/* The infrastructure bg */}
			<div className='absolute z-0  bottom-0 top-0 md:top-0 md:w-[100vw] w-[200vw] right-0 h-[100vh] object-fill overflow-y-hidden'>
				<img
					src={bg}
					alt='bg'
					className='h-[100vh]'
				/>
			</div>
		</section>
	);
};

export default PlayBoss;
