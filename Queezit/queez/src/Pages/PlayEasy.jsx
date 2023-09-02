import React from "react";
import Navbar from "../Components/Navbar";
import { CountriesCapitalEasyObj } from "../Data/CountriesCapitalObj";
import Game from "../Components/Game";
const PlayEasy = () => {
	return (
		<section className="bg-[var(--primaryBg)] min-h-screen z-30 pb-[40px] overflow-auto">
			<Navbar />
			<Game gameLevel={CountriesCapitalEasyObj} />
		</section>
	);
};

export default PlayEasy;
