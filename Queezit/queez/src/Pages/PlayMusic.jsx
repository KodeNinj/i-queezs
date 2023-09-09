import React from "react";

const PlayMusic = () => {
	return (
		<div className="flex items-center justify-center w-screen h-screen bg-[var(--secondary)]">
			<iframe
				title="spotify"
				src="https://open.spotify.com/embed/playlist/5GSAGBmNnHlQERrwC1yhgh?utm_source=generator"
				width="20%"
				height="352"
				frameBorder="0"
				allowfullscreen=""
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			/>
		</div>
	);
};

export default PlayMusic;
