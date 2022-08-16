require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: "https://rpc.ankr.com/polygon_mumbai",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 80001,
    },
  },
};
