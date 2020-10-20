require('babel-register');
require('babel-polyfill');
const path = require("path");

require("dotenv").config({path: `${__dirname}/.env`});
const HDWalletProvider = require("./node_modules/@truffle/hdwallet-provider");
const fs = require('fs');

const secrets = JSON.parse(
  fs.readFileSync(".env").toString().trim()
);
const privateKeys = secrets.seed ;
const idd = secrets.projectId ;
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
	rinkeby1: {
      provider: () =>
        new HDWalletProvider(
          privateKeys, "https://rinkeby.infura.io/v3/"+idd
        ),
      network_id: "4" ,
	 
    
	 
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"
    }
  }
}
