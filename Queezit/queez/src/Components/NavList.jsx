import React from "react";

import iconsList from "../Data/NavLinks"
const NavList = () => {
	return (
		<div>
			<ul className="flex gap-5 text-[18px] p-5">
				{iconsList.map((e) => (
					<li className="flex items-center gap-[10px]" key={e.text}>
						<e.icon size={18} className="md:block hidden" />
						{e.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavList;
