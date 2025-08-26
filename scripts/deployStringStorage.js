const hre = require("hardhat");

async function main() {
  const StringStorage = await hre.ethers.getContractFactory("StringStorage");
  const stringStorage = await StringStorage.deploy();
  
  await stringStorage.waitForDeployment();
  
  console.log("StringStorage deployed to:", await stringStorage.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});