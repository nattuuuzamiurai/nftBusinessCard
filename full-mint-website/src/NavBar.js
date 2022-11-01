import React from "react";
import { Button, Box, Flex, Image, Link, Spacer } from "@chakra-ui/react";
import Twitter from "./assets/social-media-icons/logo.png";

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
		<Flex justify="space-between" align="center" padding="30px">
			{}
			<Flex justify="space-around" width="40%" padding="0 75px">
				<Link href="https://twitter.com/nattuuu_zamurai">
					<Image src={Twitter} boxSize="84px" margin="0 15px" />
				</Link>
			</Flex>
			{}
			{isConnected ? (
				<Box margin="0 15px">
					Connected:{accounts[0].substr(0, 4)}...{accounts[0].substr(-4, 4)}
				</Box>
			) : (
				<Button
					backgroundColor="#D6517D"
					borderRadius="5px"
					boxShadow="0px 2px 2px 1px #0F0F0F"
					color="white"
					cursor="pointer"
					fontFamily="inherit"
					padding="15px"
					margin="0 15px"
					onClick={connectAccount}
				>
					Connect
				</Button>
			)}
		</Flex>
	);
};

export default NavBar;
