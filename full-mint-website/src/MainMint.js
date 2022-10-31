import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import BusinessCardNft from "./BusinessCardNft.json";

const BusinessCardNftAddress = process.env.NFT_ADDRESS;

const MainMint = ({ accounts, setAccounts }) => {
	const [mintAmount, setMintAmount] = useState(1);
	const isConnected = Boolean(accounts[0]);

	async function handleMint() {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
			const signer = provider.getSigner();
			const contract = new ethers.Contract(
				BusinessCardNftAddress,
				BusinessCardNft.abi,
				signer
			);
			try {
				const response = await contract.mint();
			} catch (err) {
				console.log("error: ", err);
			}
		}
	}

	return (
		<div>
			<h1>NFT名刺</h1>
			<p>なっとう侍の名刺NFTをゲットしよう! mint費用がガス代のみ!</p>
			{isConnected ? (
				<div>
					<button onClick={handleMint}>Mint Now</button>
				</div>
			) : (
				<p>You mast be connected to Mint.</p>
			)}
		</div>
	);
};

export default MainMint;
