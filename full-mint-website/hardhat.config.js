require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

const accounts =
	process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.9",
	networks: {
		local: {
			url: "http://localhost:8545",
			accounts: accounts,
		},
		polygon: {
			url: "https://polygon-rpc.com",
			chianId: 137,
			accounts: accounts,
		},
		mumbai: {
			url: "https://rpc-mumbai.maticvigil.com",
			chianId: 80001,
			accounts: accounts,
		},
	},
	etherscan: {
		apiKey: process.env.POLYGON_API_KEY,
	},
};
