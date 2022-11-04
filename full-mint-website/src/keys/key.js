export const getPrivateKey = () => {
	let privateKey = process.env.REACT_APP_PRIVATE_KEY;
	if (privateKey === undefined) {
		privateKey = "";
	}
	return privateKey;
};
