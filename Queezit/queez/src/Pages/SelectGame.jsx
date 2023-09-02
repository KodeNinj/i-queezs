import React from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/bg.mp4";
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
				<div className="h-[70vh] w-full text-black block absolute z-10 overflow-y-scroll overflow-x-hidden py-[20px]">
					<h4 className="text-yellow-300 text-center mt-[20px] text-[24px]">
						How to play
					</h4>
					<p className="text-center mt-[20px] mb-[30px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
						debitis blanditiis quis quasi, alias ullam distinctio cumque enim,
						quaerat est voluptatum expedita vitae odio natus obcaecati unde cum
						atque. Sint omnis recusandae, ex perferendis corporis mollitia
						ratione sequi voluptatibus a nemo temporibus fuga. Nulla placeat
						ipsa laboriosam sit inventore quos enim veritatis, aperiam dolorem
						nam ullam eveniet incidunt maxime rerum sed fuga nisi numquam porro
						vel nesciunt earum corrupti, exercitationem modi dolor. Voluptatem
						doloribus iste eum facere, placeat itaque libero hic error minus
						amet inventore in numquam ut distinctio consequatur voluptatibus
						reiciendis id minima vitae quam natus nemo. Quos dolor alias nemo
						cum delectus, facere ipsa sed aperiam aut dolore tempora neque rem
						in nulla laborum, voluptatibus qui eum aspernatur.
					</p>
					<button className="w-[90%] sm:w-[40%] sm:mx-[30%] mx-[5%] mt-[20px] bg-[var(--brownColor)] py-[15px] rounded-full  flex items-center text-black justify-center gap-3">
						{" "}
						<SlGameController />
						Play Game Now
					</button>
				</div>
				<div className="content-box absolute z-1 bg-white opacity-50 w-full lg:h-[60vh] h-full top-0  rounded-[5px]"></div>
			</div>
		</section>
	);
};

export default SelectGame;
