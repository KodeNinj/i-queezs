import React from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/design.png";
const Learn = () => {
	return (
		<div className="bg-[var(--primaryBg)] min-h-screen">
			<Navbar />
			<h2>Learn is here</h2>

			{/* The infrastructure bg */}
			<div className="absolute z-0  bottom-0 top-[1vh] md:top-0 md:w-[100vw] w-[200vw] right-0 h-[100vh] object-fill overflow-y-hidden">
				<img src={bg} alt="bg" className="h-[100vh]" />
			</div>
		</div>
	);
};

export default Learn;
