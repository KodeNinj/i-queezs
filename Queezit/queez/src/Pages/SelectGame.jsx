import React from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/bg.mp4";
import { Link } from "react-router-dom";
import { SlGameController } from "react-icons/sl";
import { FiBook } from "react-icons/fi";

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
				className="md:h-screen h-[120vh]  w-screen object-cover absolute top-0 left-0 opacity-90 "
			/>
			<div className=" w-[90vw] mx-[5vw] sm:w-[60vw] sm:mx-[20vw] mt-[5vh] px-[24px] py-[32px] absolute rounded-lg z-0 flex items-center justify-center bg-white border-2 border-[var(--secondary)]">
				{/* <div className="content-box absolute  bg-white opacity-50 w-full lg:h-[80vh]  h-full top-0  rounded-[5px]"></div> */}
				<div className="h-full w-full text-black   z-10 overflow-y-scroll overflow-x-hidden py-[30px] ">
					<h4 className="text-[var(--deepBlue)] text-center z-10  text-[24px] font-extrabold">
						How to play
					</h4>
					<p className="text-center mt-[20px] z-10 mb-[30px] pb-[20px]">
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
					<div className="btn flex justify-center items-center md:flex-row flex-col gap-[5%]">
						<Link
							className="md:w-[40%] w-[90%] mt-[20px] bg-[var(--deepBlue)] py-[15px] rounded-full  flex items-center text-white justify-center gap-3"
							to="/selectgame">
							{" "}
							<SlGameController />
							Play Game Now
						</Link>
						<Link
							className="md:w-[40%] w-[90%] mt-[20px] border-[3px] border-[var(--deepBlue)] py-[15px] rounded-full  flex items-center text-[var(--deepBlue)] justify-center gap-3"
							to="/learn">
							{" "}
							<FiBook />
							Learn About Countries
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SelectGame;
