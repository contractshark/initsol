/** 
* @file hardhat utils
* @summary impersonate accounts/signers
*/
const hre = require("hardhat");
const forkFrom = async (blockNumber) => {  
    await hre.network.provider.request({
      method: "hardhat_reset",
      params: [
        {
          forking: {
            jsonRpcUrl: hre.config.networks.hardhat.forking.url,
            blockNumber: blockNumber,
          },
        },
      ],
    });
};

const addresses = {
    ${contractName}: "${contractAddress}",
}

const impersonate = async function getImpersonatedSigner(address) {
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [address]
    });
    return ethers.provider.getSigner(address);
}

module.exports = [addresses, forkFrom, impersonate];
/** @exports [impersonate,forkFrom,addresses] **/
