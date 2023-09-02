import React from "react";
import Navbar from "../Components/Navbar";
import cooking from "../Assets/chef.png";
import { Link } from "react-router-dom";
const PlayRandom = () => {
	return (
		<section className="bg-[var(--primaryBg)] min-h-screen z-30 pb-[40px] overflow-auto">
			<Navbar />
			<div className="questionBox md:w-[40%] w-[80%] mx-[10%] md:mx-[30%] h-auto bg-[var(--secondbg)] rounded-xl p-[30px] md:mt-[100px] ">
				<h2 className="text-lg text-center text-[var(--secondary)] font-bold mb-[30px]">
					Still cooking up this page.
				</h2>
				<img
					src={cooking}
					alt=""
					className="md:w-[20%] flex items-center justify-center md:mx-[40%]"
				/>
				<Link
					to="/selectgame"
					className="p-[12px] md:w-[45%] w-full text-[var(--secondary)] border-[var(--secondary)] border-[2px] block text-center rounded-lg hover:bg-white transition-color duration-[1s] hover:text-[var(--primaryBg)]">
					Change Level
				</Link>
			</div>
		</section>
	);
};

export default PlayRandom;
