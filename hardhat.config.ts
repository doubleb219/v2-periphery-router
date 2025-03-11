/** @type import('hardhat/config').HardhatUserConfig */
import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-verify";
// import "@nomiclabs/hardhat-etherscan";
import "hardhat-deploy";


const config: HardhatUserConfig = {
  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      // evmVersion: "london",
    },
  },
  networks: {
    sonicTestnet: {
      url: "https://rpc.blaze.soniclabs.com",
      accounts: ["c1c4a1b8e927c6fae4fb1c2cdcdff3345a32180affef29f9ceea8d114dacdf64"], // Replace with your wallet private key
      chainId: 57054,
    },
  },
  etherscan: {
    apiKey: {
      sonicTestnet: "9DXFXX257MVXK9HGBF4S1WKHZMR8CRSXGM",
    },
    customChains: [
      {
        network: "sonic",
        chainId: 146,
        urls: {
          apiURL: "https://api.sonicscan.org/api",
          browserURL: "https://sonicscan.org"
        }
      },
      {
        network: "sonicTestnet",
        chainId: 57054,
        urls: {
          apiURL: "https://api-testnet.sonicscan.org/api",
          browserURL: "https://testnet.sonicscan.org"
        }
      }
    ]
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;