import { useState } from "react";
import "./App.css";
import MainMint from "./MainMint";
import NavBar from "./NavBar";

function App() {
	return (
		<div className="overlay">
			<div className="App">
				<NavBar />
				<MainMint />
			</div>
			<div className="moving-background"></div>
		</div>
	);
}

export default App;
