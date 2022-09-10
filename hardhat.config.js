/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require("@nomiclabs/hardhat-waffle");
 require('@nomiclabs/hardhat-etherscan');
 
 
 task("accoun ts", "Prints the list of accounts", async () => {
   const accounts = await ethers.getSigners();
 
   for (const account of accounts) {
     console.log(account.address);
   }
 }); 
 
 module.exports = {
   solidity: {
     version: "0.8.14",
   }, 
   defaultNetwork: "rinkeby",
   networks: {
   rinkeby: {
     url: '// Alchemy Key //', // Alchemy > Apps > View >  Https
     chainId: 4, 
     accounts: ['/ /Metamask Private Key //'] // metamask Rinkeby Private Key
   },
 },
 etherscan:{
  apiKey: "// Etherscan API Key //" // etherscan API 키 
}
};
// npm i hardhat을 먼저 설치 npm i hardhat -> compile 정상적으로 됨 
