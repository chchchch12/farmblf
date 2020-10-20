const DappTokenSale = artifacts.require('DappTokenSale')

module.exports = async function(callback) {
  let DappTokenSale = await DappTokenSale.deployed()
  await DappTokenSale.endSale()
  // Code goes here...
  console.log("Tokens issued!")
  callback()
}
