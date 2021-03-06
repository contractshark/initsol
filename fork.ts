/** 
* @file fork 
* @summary hardhat fork
*/
import hre from "hardhat";

/**
* @param blockNumber
* @type {number}
*/
export const forkFrom = async (blockNumber: number) => {
  if (!hre.config.networks.hardhat.forking) {
    throw new Error(
      `Forking misconfigured for "hardhat" network in hardhat.config.ts`
    );
  }

  await hre.network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          jsonRpcUrl: hre.config.networks.hardhat.forking.url,
          /** @type {number} */
          blockNumber: blockNumber,
        },
      },
    ],
  });
};
/** @exports fork **/
