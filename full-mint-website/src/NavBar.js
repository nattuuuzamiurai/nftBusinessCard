import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
	const isConnected = Boolean(accounts[0]);

	async function connectAccount() {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				//このメソッドでメタマスクに存在するアカウントを全て渡してくれる
				method: "eth_requestAccounts",
			});
			//アカウントをアップデート
			setAccounts(accounts);
		}
	}

	return (
		<div>
			{}
			<div>Twitter</div>
			{}

			{}
			{isConnected ? (
				<p>Connected</p>
			) : (
				<button onClick={connectAccount}>Connect</button>
			)}
		</div>
	);
};

export default NavBar;
