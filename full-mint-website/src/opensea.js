import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import OpenSea from "./assets/social-media-icons/OpenSea-Logo-450.jpeg";

const OpenSeaBar = () => {
	return (
		<Flex justify="space-between" padding="10px">
			{}
			<Flex justify="space-around" width="100%" padding="25px">
				<Image
					src={OpenSea}
					boxSize="120px"
					margin="0 15px"
					width={300}
					height={100}
					object-fit="cover"
					borderRadius="30px"
					boxShadow="3px 5px 6px 2px #0F0F0F"
				/>
			</Flex>
			{}
		</Flex>
	);
};

export default OpenSeaBar;
