require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.9",
	networks: {
		local: {
			url: "http://localhost:8545",
			accounts: [process.env.LOCAL_KEY],
		},
		polygon: {
			url: process.env.POLYGON_RPC_URL,
			chianId: 137,
			accounts: [process.env.PRIVATE_KEY],
		},
		mumbai: {
			url: process.env.MUMBAI_RPC_URL,
			chianId: 80001,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	etherscan: {
		apiKey: process.env.POLYGON_API_KEY,
	},
};
