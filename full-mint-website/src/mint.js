import { privateKey } from "./secret/key.js";
import { rpc, nftAddress } from "./secret/lib.js";
import { ethers } from "ethers";
import BusinessCardNft from "./BusinessCardNft.json";

const mint = async (recipient) => {
	const provider = new ethers.providers.JsonRpcProvider(rpc);
	const contract = new ethers.Contract(
		nftAddress,
		BusinessCardNft.abi,
		provider
	);
	const wallet = await new ethers.Wallet(privateKey, provider);
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
