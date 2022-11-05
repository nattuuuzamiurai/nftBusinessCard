import React from "react";
import { Flex, Image, Link } from "@chakra-ui/react";
import Twitter from "./assets/social-media-icons/logo.png";

const NavBar = () => {
	return (
		<Flex justify="space-between" align="center" padding="10px">
			{}
			<Flex justify="space-around" width="40%" padding="0 75px">
				<Link href="https://twitter.com/nattuuu_zamurai" target="_blank">
					<Image src={Twitter} boxSize="120px" margin="0 15px" />
				</Link>
			</Flex>
			{}
		</Flex>
	);
};

export default NavBar;
