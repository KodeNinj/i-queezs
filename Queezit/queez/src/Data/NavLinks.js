import { SlGameController } from "react-icons/sl";
import { BsDoorClosed } from "react-icons/bs";
import { MdOutlineCalendarViewMonth, MdOutlineFeedback } from "react-icons/md";

// icon array
const iconsList = [
	{
		text: "Play Game",
		icon: SlGameController,
	},
	{
		text: "High Score",
		icon: MdOutlineCalendarViewMonth,
	},
	{
		text: "Give Feedback",
		icon: MdOutlineFeedback,
	},
	{
		text: "Quit",
		icon: BsDoorClosed,
	},
];

export default iconsList;
