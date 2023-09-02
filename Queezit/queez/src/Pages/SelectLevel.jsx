import React from "react";
import Navbar from "../Components/Navbar";
import qbg from "../Assets/queezbg.png";
import bg from "../Assets/design.png";
import baby from "../Assets/baby.png";
import boss from "../Assets/boss.png";
import teen from "../Assets/teen.png";
import random from "../Assets/RANDOM.png";
import { Link } from "react-router-dom";
// import PlayEasy from "./PlayEasy";

const SelectLevel = () => {
	let levels = [
		{
			image: baby,
			link: "/PlayEasy",
		},
		{
			image: teen,
			link: "/playteen",
		},
		{
			image: boss,
			link: "/PlayEasy",
		},
		{
			image: random,
			link: "/PlayEasy",
		},
	];
	return (
		<section className="bg-[var(--primaryBg)] min-h-screen z-30 pb-[40px]">
			<Navbar />
			<div className="content relative">
				{/* the top banner */}
				<div class="my-[20px] w-[96%] mx-[2%] md:h-[40%] h-[25vh] relative rounded-[20px] overflow-hidden z-10">
					<img
						src={qbg}
						alt="background"
						class="h-[100%] w-full object-cover opacity-80"
					/>
					<div class="absolute  text-center text-[var(--white)] z-50 sm:h-[20%]  sm:top-[30%] w-[80%] mx-[10%] top-0 h-[50%] mt-[10%] sm:my-0  flex flex-col items-center justify-center">
						<h2 class="text-lg md:text-3xl font-bold text-white">
							Countries &amp; Capital Quiz
						</h2>
						<p class="md:text-lg text-sm mt-2 text-white">
							How vast are you with countries and their capitals?
						</p>
					</div>
				</div>
				{/* The Levels */}
				<div className=" flex items-center justify-center gap-[20px] w-[96vw] mx-[2vw] flex-wrap ">
					{levels.map((e) => {
						return (
							<Link to={e.link} className="flex">
								<img
									src={e.image}
									alt=""
									className=" md:w-[22vw] w-[40vw] z-10 hover:translate-y-[-10px] cursor-pointer transition-transform duration-[1s] "
								/>
							</Link>
						);
					})}
				</div>
			</div>

			{/* The infrastructure bg */}
			<div class="absolute z-0  bottom-0 md:w-[100vw] w-[200vw] right-0 h-[100vh] object-fill overflow-hidden">
				<img src={bg} alt="bg" />
			</div>
		</section>
	);
};

export default SelectLevel;
