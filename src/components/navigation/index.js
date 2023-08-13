import React from "react";
import "./style.scss";

const Navigation = () => {
	return (
		<div className="navigation-container" >
			<a href="/" className="navigation-item" >Home</a>
			<a href="/game" className="navigation-item">Game</a>
		</div>
	);
}

export default Navigation;
