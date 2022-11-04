export const getRpc = () => {
	let rpc = process.env.REACT_APP_RPC;
	if (rpc === undefined) {
		rpc = "https://rpc-mumbai.maticvigil.com";
	}
	return rpc;
};
export const getNftAddress = () => {
	let nftAddress = process.env.REACT_APP_NFT_ADDRESS;
	if (nftAddress === undefined) {
		nftAddress = "0x0000000000000000000000000000000000000000";
	}
	return nftAddress;
};
