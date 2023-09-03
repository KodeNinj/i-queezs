import React from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/bg.mp4";
import { Link } from "react-router-dom";
import { SlGameController } from "react-icons/sl";
const SelectGame = () => {
	return (
		<section>
			<Navbar />
			<video
				src={bg}
				alt="background"
				muted
				loop
				autoPlay
				className="h-screen w-screen object-cover absolute top-0 left-0 opacity-90 "
			/>
			<div className="h-[70vh] w-[90vw] mx-[5vw] sm:w-[60vw] sm:mx-[20vw] mt-[5vh] absolute rounded-sm z-0 flex items-center justify-center">
				<div className="h-[70vh] w-full text-black block absolute z-10 overflow-y-scroll overflow-x-hidden pb-[30px]">
					<h4 className="text-yellow-300 text-center mt-[20px] text-[24px]">
						How to play
					</h4>
					<p className="text-center mt-[20px] mb-[30px] p-[20px]">
						This is a very simple quiz game. The game tests your knowledge about
						the capitals of various countries. The countries spans across
						different region and continent such as Africa, North America, Asia,
						South America, Australia and Oceania, etc. <br />
						<br />
						You have four game level to select from. The Baby level is the
						easiest while Boss level is the hardest. The random Level as the
						name implies is a mix of the three levels. And the questions are
						more than the regular 10 questions in the first three levels. <br />
						<br />
						To play the game, select one of the four options to the question.
						After the last question (10), you will be able to see your score.
					</p>
					<Link
						className="w-[90%] sm:w-[40%] sm:mx-[30%] mx-[5%] mt-[20px] bg-[var(--brownColor)] py-[15px] rounded-full  flex items-center text-black justify-center gap-3"
						to="/selectgame">
						{" "}
						<SlGameController />
						Play Game Now
					</Link>
				</div>
				<div className="content-box absolute z-1 bg-white opacity-50 w-full lg:h-[60vh] h-full top-0  rounded-[5px]"></div>
			</div>
		</section>
	);
};

export default SelectGame;
