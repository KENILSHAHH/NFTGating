/** @format */

require('dotenv').config();
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
  solidity: '0.8.9',
  defaultNetwork: 'mumbai',
  networks: {
    hardhat: {},
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/UVQD7tAU7RwKHWZ7Pv3E7nbwMAJEsWLF',
      accounts: [
        `b914c29c1f53862800cb1cc29dfbf7c3df54ddb95e14cb869cad9924191536ad`,
      ],
    },
    filecoin: {
      url: 'https://filecoin-hyperspace.chainup.net/rpc/v1',
      accounts: [
        `b914c29c1f53862800cb1cc29dfbf7c3df54ddb95e14cb869cad9924191536ad`,
      ],
    },
  },
  etherscan: {
    apiKey: 'S1DFFEZQ48DNQ8YAN5RVC5D9CE1AF1496U',
  },
};
