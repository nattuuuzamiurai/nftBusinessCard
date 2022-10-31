import { useState } from "react";
import "./App.css";
import MainMint from "./MainMint";
import NavBar from "./NavBar";

function App() {
	//フックを作成
	const [accounts, setAccounts] = useState([]);

	return (
		<div className="App">
			<NavBar accounts={accounts} setAccounts={setAccounts} />
			<MainMint accounts={accounts} setAccounts={setAccounts} />
		</div>
	);
}

export default App;
