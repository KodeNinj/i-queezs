import React from "react";
import Navbar from "../Components/Navbar";
import { CountriesCapitalMediumObj } from "../Data/CountriesCapitalMediumObj";
import Game from "../Components/Game";
const PlayEasy = () => {
	return (
		<section className="bg-[var(--primaryBg)] h-screen z-30 pb-[40px] overflow-hidden">
			<Navbar />
			<Game gameLevel={CountriesCapitalMediumObj} />
		</section>
	);
};

export default PlayEasy;
