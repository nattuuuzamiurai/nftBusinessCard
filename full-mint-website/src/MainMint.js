import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Button, Box, Flex, Input, Text } from "@chakra-ui/react";
import BusinessCardNft from "./BusinessCardNft.json";

const BusinessCardNftAddress = process.env.NFT_ADDRESS;

const MainMint = ({ accounts, setAccounts }) => {
	//ミントの数を定義。デフォルトは１
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
				//コントラクト内のmint()を実行
				const response = await contract.mint();
				console.log("response: ", response);
			} catch (err) {
				console.log("error: ", err);
			}
		}
	}
	return (
		<div>
			<Text fontSize="48px" textShadow="0 5px #000000">
				NFT名刺
			</Text>
			<Text
				fontSize="30px"
				letterSpacing="-5.5%"
				fontFamily="VT323"
				textShadow="0 2px 2px #000000"
			>
				なっとう侍の名刺NFTをゲットしよう! mint費用はガス代のみ!
			</Text>
			{isConnected ? (
				<div>
					<Flex align="center" justify="center"></Flex>
					<Button
						backgroundColor="#D6517D"
						borderRadius="5px"
						boxShadow="0px 2px 2px 1px #0F0F0F"
						color="white"
						cursor="pointer"
						fontFamily="inherit"
						padding="15px"
						marginTop="10px"
						onClick={handleMint}
					>
						Mint Now
					</Button>
				</div>
			) : (
				<p>You must be connected to Mint.</p>
			)}
		</div>
	);
};

export default MainMint;
