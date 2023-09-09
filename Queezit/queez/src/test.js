import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Game = ({ gameLevel }) => {
	const [index, setindex] = useState(1);
	const [score, setscore] = useState(0);
	const [remark, setremark] = useState(
		"Giving up is okay. But doing that without even trying first? That's a dick move!"
	);

	// Shuffle the gameLevel array when it changes or when the component mounts
	useEffect(() => {
		shuffle();
	}, [gameLevel]);

	function shuffle() {
		const shuffledGameLevel = [...gameLevel]; // Create a new array to avoid mutating the original
		for (let i = shuffledGameLevel.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledGameLevel[i], shuffledGameLevel[j]] = [
				shuffledGameLevel[j],
				shuffledGameLevel[i],
			];
		}
		gameLevel = shuffledGameLevel; // Update the gameLevel array
	}

	function getRemark() {
		switch (
			score
			// ...rest of your code for getRemark function
		) {
		}
	}

	// ...rest of your component code
};
