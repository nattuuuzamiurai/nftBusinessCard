export const getRpc = () => {
	return process.env.REACT_APP_RPC;
};
export const getNftAddress = () => {
	let nftAddress = process.env.NFT_ADDRESS;
	if (nftAddress === undefined) {
		nftAddress = "0x0000000000000000000000000000000000000000";
	}
	return nftAddress;
};
