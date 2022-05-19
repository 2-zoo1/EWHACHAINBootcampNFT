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
     url: 'https://eth-rinkeby.alchemyapi.io/v2/oJVgBXxNlgwgNHfgKSYCqv3KSDfVVrSA', // Alchemy > Apps > View >  Https
     chainId: 4, 
     accounts: ['eb461d537a0312a30866afe604c2891aeeb03a9b6e7faefd7b6257a7f1c9d6f7'] // metamask Rinkeby Private Key
   },
 },
 etherscan:{
  apiKey: "4MYDCCMW8Z9RTRJKSSR4FTIPFYXHVCEWZZ" // etherscan API 키 
}
};
// npm i hardhat을 먼저 설치 npm i hardhat -> compile 정상적으로 됨 