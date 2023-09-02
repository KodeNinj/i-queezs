import { React, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import NavList from "./NavList";
import NavLinks from "../Data/NavLinks";

const Navbar = () => {
	const [menuOpen, setmenuOpen] = useState(false);

	return (
		<nav className="flex justify-between items-center sm:px-[40px] px-[20px] z-100">
			{/* This is where the logo is */}
			<div className="logo_col py-5 z-30">
				<p className="text-[24px] font-bold text-[var(--secondary)]">
					i<span className="text-[var(--brownColor)]">Queez</span>
				</p>
			</div>
			{/* The navigation links */}
			<div className="links sm:block hidden z-30 text-white">
				<NavList />
			</div>

			{/* mobile hamburger menu */}
			<div className="mobile-menu sm:hidden block z-30 ">
				{!menuOpen ? (
					<HiMenuAlt3
						size={26}
						color="white"
						onClick={() => setmenuOpen(!menuOpen)}
					/>
				) : (
					<GrClose
						size={24}
						color="black"
						onClick={() => setmenuOpen(!menuOpen)}
					/>
				)}
			</div>

			{/* Mobile menu */}
			{!menuOpen ? (
				""
			) : (
				<nav className="mobile flex justify-between items-center flex-col w-[50vw] h-screen bg-slate-100 absolute right-0 top-0 pt-[100px] pb-[150px] z-20">
					<ul className="mobile-navs flex flex-col gap-[30px] text-[18px] p-5 z-50">
						{NavLinks.map((e) => (
							<li className="flex items-center justify-start gap-[30px] border-b-2 pb-3 ">
								<e.icon size={18} />
								{e.text}
							</li>
						))}
					</ul>
					<button className="w-[90%] bg-slate-500 py-[15px] rounded-full text-white flex items-center justify-center gap-3">
						{" "}
						<AiOutlineStar />
						Rate Game
					</button>
				</nav>
			)}
		</nav>
	);
};

export default Navbar;
