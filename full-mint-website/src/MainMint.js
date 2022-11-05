import { useState } from "react";
import { ethers } from "ethers";
import { Button, Box, Flex, Input, Text, Image, Link } from "@chakra-ui/react";
import mint from "./mint.js";
import waiting from "./assets/gif/Infinity-1s-200px.gif";
import OpenSeaBar from "./opensea";

const MainMint = () => {
	const [address, setAddress] = useState("");
	const [addText, setAddText] = useState("");
	const [addHash, setAddHash] = useState("");
	const isAddress = Boolean(ethers.utils.isAddress(addText));
	const isSend = Boolean(addHash[0]);

	const getScanLink = () => {
		return "https://mumbai.polygonscan.com/tx/" + addHash;
	};
	const getOpenSeaLink = () => {
		return "https://opensea.io/ja/" + addText;
	};

	const onClickAddAddress = async () => {
		setAddText(address);
		setAddress("");
		if (!ethers.utils.isAddress(address)) {
			alert("入力されたaddressは無効です!");
		} else {
			const hash = await mint(address);
			setAddHash(hash);
		}
	};

	return (
		<Box>
			<div className="title">
				<Text fontSize="120px" textShadow="0 5px #000000">
					NFT名刺
				</Text>
			</div>
			{isAddress ? (
				isSend ? (
					<Text
						fontSize="30px"
						letterSpacing="-5.5%"
						fontFamily="VT323"
						textShadow="0 2px 2px #000000"
					>
						success! NFTが無事mintされました!<b></b> hash:
						<Link href={getScanLink()} color="white">
							{addHash}
						</Link>
						<Link href={getOpenSeaLink()}>
							<OpenSeaBar />
						</Link>
					</Text>
				) : (
					<>
						<Text
							fontSize="30px"
							letterSpacing="-5.5%"
							fontFamily="VT323"
							textShadow="0 2px 2px #000000"
							marginBottom={0}
						>
							転送中です
						</Text>
						<Flex align="center" justify="center"></Flex>
						<Flex align="center" justify="center"></Flex>

						<Image
							src={waiting}
							boxSize="200px"
							margin="0px"
							fontFamily="inherit"
						/>
					</>
				)
			) : (
				<>
					<Text
						fontSize="30px"
						letterSpacing="-5.5%"
						fontFamily="VT323"
						textShadow="0 2px 2px #000000"
						marginBottom={10}
						marginTop="10px"
					>
						ADDRESSを入力してください
					</Text>
					<Text
						fontSize="15px"
						letterSpacing="-5.5%"
						fontFamily="VT323"
						textShadow="0 2px 2px #000000"
						color="red"
						marginTop="0px"
					>
						*ガス代なしで発行されます
					</Text>

					<Flex align="center" justify="center">
						<Input
							htmlSize={10}
							color="gray.300"
							fontFamily="inherit"
							backgroundColor="#C0C0C0"
							width="650px"
							height="40px"
							textAlign="center"
							paddingLeft="19px"
							marginTop="0px"
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
