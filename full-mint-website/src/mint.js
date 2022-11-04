import { getPrivateKey } from "./keys/key.js";
import { getNftAddress, getRpc } from "./keys/lib.js";
import { ethers } from "ethers";
import BusinessCardNft from "./BusinessCardNft.json";

console.log(getRpc());

const mint = async (recipient) => {
	const provider = new ethers.providers.JsonRpcProvider(getRpc());
	const contract = new ethers.Contract(
		getNftAddress(),
		BusinessCardNft.abi,
		provider
	);
	const wallet = await new ethers.Wallet(getPrivateKey(), provider);
	const nonce = await wallet.getTransactionCount();
	const gasFee = await provider.getFeeData().gasPrice;

	let rawTxn = await contract.populateTransaction.mint(recipient, {
		gasPrice: gasFee,
		nonce: nonce,
	});
	let signedTxn = (await wallet).sendTransaction(rawTxn);
	console.log(await signedTxn.hash);
};

export default mint;
