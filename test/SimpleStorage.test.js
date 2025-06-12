const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  let simpleStorage;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.waitForDeployment();
  });

  it("Should return the initial value of 0", async function () {
    expect(await simpleStorage.get()).to.equal(0);
  });

  it("Should store and return the correct value", async function () {
    const valueToStore = 42;
    await simpleStorage.set(valueToStore);
    expect(await simpleStorage.get()).to.equal(valueToStore);
  });

  it("Should emit DataStored event when setting value", async function () {
    const valueToStore = 123;
    await expect(simpleStorage.set(valueToStore))
      .to.emit(simpleStorage, "DataStored")
      .withArgs(valueToStore, owner.address);
  });
});