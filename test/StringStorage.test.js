const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StringStorage", function () {
  let StringStorage;
  let stringStorage;
  let owner;
  let addr1;

  beforeEach(async function () {
    StringStorage = await ethers.getContractFactory("StringStorage");
    [owner, addr1] = await ethers.getSigners();
    stringStorage = await StringStorage.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await stringStorage.owner()).to.equal(owner.address);
    });

    it("Should return empty string initially", async function () {
      expect(await stringStorage.getString()).to.equal("");
    });
  });

  describe("String Storage", function () {
    it("Should allow owner to set string", async function () {
      const testString = "Hello, World!";
      await stringStorage.setString(testString);
      expect(await stringStorage.getString()).to.equal(testString);
    });

    it("Should emit StringStored event when setting string", async function () {
      const testString = "Test Event";
      await expect(stringStorage.setString(testString))
        .to.emit(stringStorage, "StringStored")
        .withArgs(testString, owner.address);
    });

    it("Should not allow non-owner to set string", async function () {
      const testString = "Unauthorized";
      await expect(
        stringStorage.connect(addr1).setString(testString)
      ).to.be.revertedWith("Only owner can call this function");
    });

    it("Should allow anyone to read string", async function () {
      const testString = "Public Read Test";
      await stringStorage.setString(testString);
      expect(await stringStorage.connect(addr1).getString()).to.equal(testString);
    });
  });

  describe("Ownership", function () {
    it("Should transfer ownership", async function () {
      await stringStorage.transferOwnership(addr1.address);
      expect(await stringStorage.owner()).to.equal(addr1.address);
    });

    it("Should emit OwnershipTransferred event", async function () {
      await expect(stringStorage.transferOwnership(addr1.address))
        .to.emit(stringStorage, "OwnershipTransferred")
        .withArgs(owner.address, addr1.address);
    });

    it("Should not allow non-owner to transfer ownership", async function () {
      await expect(
        stringStorage.connect(addr1).transferOwnership(addr1.address)
      ).to.be.revertedWith("Only owner can call this function");
    });
  });
});