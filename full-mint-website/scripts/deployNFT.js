const hre = require("hardhat");

async function main() {
	const CardNFT = await hre.ethers.getContractFactory("BusinessCardNft");
	const cardNFT = await CardNFT.deploy(
		"Nattuuu Business Card",
		"なっとう侍",
		"ipfs://QmVVShRQpjWEmNDhvKMuZkAAULcD75am8zPLN2nsqpkSjp"
	);
	await cardNFT.deployed();

	console.log("deploy done. address is ", cardNFT.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
