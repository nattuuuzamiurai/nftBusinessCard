export const getRpc = () => {
	const rpc = process.env.RPC;
	if (rpc == undefined) {
		rpc = "https://rpc-mumbai.maticvigil.com";
	}
	return rpc;
};
export const getNftAddress = () => {
	const nftAddress = process.env.NFTADDRESS;
	if (nftAddress == undefined) {
		nftAddress = "0x0000000000000000000000000000000000000000";
	}
	return nftAddress;
};
