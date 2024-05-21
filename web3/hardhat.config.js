require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: {
		version: "0.8.24",
		defaultNetwork: "sepolia",
		networks: {
			hardhat: {},
			sepolia: {
				url: "https://sepolia.drpc.org",
				accounts: [`0x${process.env.PRIVATE_KEY}`],
			},
		},
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
};
