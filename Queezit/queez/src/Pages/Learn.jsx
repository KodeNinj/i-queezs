import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import bg from "../Assets/design.png";
import { BsTelephone } from "react-icons/bs";
const Learn = () => {
	const [countryDB, setcountryDB] = useState([]);
	const [countryName, setcountryName] = useState("nigeria");
	const [tempcontryName, settempcontryName] = useState("nigeria");

	// get the data using the API
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((response) => response.json())
			.then((data) => setcountryDB(data))
			.catch((err) => console.log(err));
		// lets
	}, []);
	// useEffect for name adjustment
	useEffect(() => {
		let wordArr = countryName;
		wordArr = countryName.split(" ");
		for (let i = 0; i < wordArr.length; i++) {
			wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
		}
		wordArr = wordArr.join(" ");
		setcountryName(wordArr);

		// let firstChar = countryName.toLowerCase().charAt(0);
		// setcountryName(firstChar.toUpperCase() + countryName.slice(1));
	}, [countryName]);
	let specificCountry;
	return (
		// Main page
		<section className="bg-[var(--primaryBg)] min-h-screen ">
			<Navbar />
			{/* the middle box where the main content is */}
			<div className="questionBox w-[80%] mx-[10%]  bg-[var(--secondbg)] rounded-xl p-[30px] lg:mt-[30px] mt-[10px] z-30 absolute h-[80vh] overflow-scroll	">
				{
					(specificCountry = countryDB
						.filter((country) => country.name.common === countryName)
						.map((item) => {
							// the major display. This is where the whole th
							return (
								<section className=" ">
									<div className="topside flex flex-col-reverse lg:flex-row md:justify-left justify-center w-full">
										<div className="countryInfo flex lg:flex-row flex-col items-center 	 justify-left gap-5 lg:w-[50%] lg:mt-0 mt-[10%]">
											<img src={item.flags.png} alt="" className="lg:w-[150px] w-[100%] h-[150px] object-fill text-center" />
											<div className="sideinfo flex flex-col gap-3">
												<h3 className="text-[24px] text-[var(--secondary)] font-bold text-center">
													{item.name.common}
												</h3>
												<div className="bottominfo flex  items-center justify-center gap-5 text-white">
													<h5>{item.capital}</h5>
													<span className="lg:block hidden">|</span>
													<h5 className="flex items-center justify-center gap-3">
														{item.cca3}
													</h5>
													<span className="lg:block hidden">|</span>
													<h5 className="flex items-center justify-center gap-3">
														<BsTelephone />
														{item.idd.root + item.idd.suffixes}
													</h5>
												</div>
											</div>
										</div>
										<form
											action=""
											className="lg:w-[60%] w-[100%] text-white text-center flex lg:flex-row flex-col justify-center items-center ">
											<input
												className="p-[14px] outline-none border-none lg:w-[60%] md:w-[50%] w-full lg:mb-0 mb-[10px] text-black rounded-sm"
												type="text"
												onChange={(e) => {
													settempcontryName(e.target.value);
													console.log(tempcontryName.length);
												}}
												autoFocus
												onSubmit={(e) => e.preventDefault()}
												placeholder="Type a country name"
											/>
											<button
												type="submit"
												className="p-[14px] mx-[10px] bg-[var(--secondary)] lg:w-[30%] md:w-[20%] w-full text-[var(--primaryBg)] font-bold rounded-sm"
												onClick={(e) => {
													e.preventDefault();
													setcountryName(tempcontryName);
												}}>
												Search
											</button>
										</form>
									</div>

									<div className="flex items-center justify-between mt-[50px] flex-wrap flex-col lg:flex-row">
										<div className="namelang lg:w-[30%] w-full mb-[20px] h-[300px] bg-[var(--box)] rounded-lg"></div>
										<div className="geography lg:w-[30%] w-full mb-[20px] h-[300px] bg-[var(--box)] rounded-lg"></div>
										<div className="otherinfo lg:w-[30%] w-full mb-[20px] h-[300px] bg-[var(--box)] rounded-lg"></div>
										{/* <h1 key={item.name.common}>{item.name.official}</h1>
									<img src={item.flags.png} alt="" /> */}
									</div>
								</section>
							);
						}))
				}
			</div>

			{/* The infrastructure bg */}
			<div className="absolute z-0  bottom-0 top-[1vh] md:top-0 md:w-[100vw] w-[200vw] right-0 h-[100vh] object-fill overflow-y-hidden">
				<img src={bg} alt="bg" className="h-[100vh]" />
			</div>
		</section>
	);
};

export default Learn;
