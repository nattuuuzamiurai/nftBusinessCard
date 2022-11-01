import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import { Button, Box, Flex, Input, Text } from "@chakra-ui/react";
import BusinessCardNft from "./BusinessCardNft.json";

const BusinessCardNftAddress = process.env.NFT_ADDRESS;

const MainMint = ({ accounts, setAccounts }) => {
	const [address, setAddress] = useState();
	const [addText, setAddText] = useState("");
	const isAddress = Boolean(ethers.utils.isAddress(addText));

	async function storageAddress() {
		console.log(address);
		try {
			//コントラクト内のmint()を実行
			// const response = await contract.mint();
			// console.log("response: ", response);
		} catch (err) {
			console.log("error: ", err);
		}
	}
	const onClickAddAddress = () => {
		setAddText(address);
		setAddress("");
		const checkAddress = address.toString();
		if (!ethers.utils.isAddress(address)) {
			alert("入力されたaddressは無効です!");
		}
	};

	return (
		<Box>
			<Text fontSize="48px" textShadow="0 5px #000000">
				NFT名刺
			</Text>
			{isAddress ? (
				<Text
					fontSize="30px"
					letterSpacing="-5.5%"
					fontFamily="VT323"
					textShadow="0 2px 2px #000000"
				>
					success! 数分以内にNFT名刺が転送されます!
				</Text>
			) : (
				<>
					<Text
						fontSize="30px"
						letterSpacing="-5.5%"
						fontFamily="VT323"
						textShadow="0 2px 2px #000000"
					>
						ADDRESSを入力してください
					</Text>
					<Flex align="center" justify="center">
						<Input
							fontFamily="inherit"
							width="650px"
							height="40px"
							textAlign="center"
							paddingLeft="19px"
							marginTop="10px"
							type="string"
							value={address}
							onChange={(event) => setAddress(event.target.value)}
						/>
					</Flex>
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
						onClick={onClickAddAddress}
					>
						Mint
					</Button>
				</>
			)}
		</Box>
	);
};

export default MainMint;
