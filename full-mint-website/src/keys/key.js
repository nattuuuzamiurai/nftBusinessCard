export const getPrivateKey = () => {
	const privateKey = process.env.PRIVATEKEY;
	if (privateKey == undefined) {
		privateKey = "";
	}
};
