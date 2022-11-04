export const getRpc = () => {
	return import.meta.env.RPC;
};
export const getNftAddress = () => {
	let nftAddress = process.env.NFT_ADDRESS;
	if (nftAddress === undefined) {
		nftAddress = "0x0000000000000000000000000000000000000000";
	}
	return nftAddress;
};
