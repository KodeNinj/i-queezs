import React from "react";
import Navbar from "../Components/Navbar";
import { CountriesCapitalBossObj } from "../Data/CountriesCapitalBossObj";
import Game from "../Components/Game";
const PlayBoss = () => {
	return (
		<section className="bg-[var(--primaryBg)] min-h-screen  z-30 pb-[40px] overflow-auto">
			<Navbar />
			<Game gameLevel={CountriesCapitalBossObj} />
		</section>
	);
};

export default PlayBoss;
