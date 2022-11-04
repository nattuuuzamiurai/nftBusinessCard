export const getRpc = () => {
	return process.env.RPC;
	if (rpc === undefined) {
		rpc = "https://rpc-mumbai.maticvigil.com";
	}
	return rpc;
};
export const getNftAddress = () => {
	let nftAddress = process.env.NFT_ADDRESS;
	if (nftAddress === undefined) {
		nftAddress = "0x0000000000000000000000000000000000000000";
	}
	return nftAddress;
};
