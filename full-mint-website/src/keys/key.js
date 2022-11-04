export const getPrivateKey = () => {
	let privateKey = process.env.PRIVATE_KEY;
	if (privateKey === undefined) {
		privateKey = "";
	}
	return privateKey;
};
