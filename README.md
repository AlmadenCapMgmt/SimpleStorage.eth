# StringStorage Smart Contract

A secure string storage smart contract built with Solidity that allows only the owner to write data while enabling public read access.

## Contract Overview

The StringStorage contract provides:
- **Secure string storage**: Store and retrieve string values on the blockchain
- **Owner-only write access**: Only the contract deployer can modify the stored string
- **Public read access**: Anyone can read the stored string
- **Ownership management**: Transfer ownership to another address
- **Event logging**: Track all string updates and ownership changes

## Contract Functions

### Public Functions
- `getString()` - Returns the stored string (readable by anyone)
- `owner()` - Returns the current owner address

### Owner-Only Functions
- `setString(string memory newString)` - Updates the stored string
- `transferOwnership(address newOwner)` - Transfers contract ownership

## Environment Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set up Environment Variables
Create a `.env` file in the project root:

```env
SEPOLIA_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID
PRIVATE_KEY=your_private_key_here
ETHERSCAN_API_KEY=your_etherscan_api_key_here
```

### 3. Get Required API Keys

#### Infura API Key
1. Go to [Infura](https://infura.io/)
2. Sign up for a free account
3. Create a new project
4. Copy the Project ID and replace `YOUR_INFURA_PROJECT_ID` in your `.env` file

#### Etherscan API Key
1. Go to [Etherscan](https://etherscan.io/)
2. Create an account and log in
3. Go to "API Keys" in your account dashboard
4. Create a new API key
5. Copy the API key and replace `your_etherscan_api_key_here` in your `.env` file

#### Private Key
1. Open MetaMask wallet
2. Click on account menu → Account Details → Export Private Key
3. Enter your password and copy the private key
4. Replace `your_private_key_here` in your `.env` file
⚠️ **WARNING**: Never share your private key or commit it to version control!

## Deployment Commands

### Compile the Contract
```bash
npm run compile
```

### Run Tests
```bash
npm run test
```

### Deploy to Sepolia Testnet
```bash
npm run deploy:sepolia
```

### Verify Contract on Etherscan
After deployment, verify your contract:
```bash
npx hardhat verify --network sepolia <CONTRACT_ADDRESS>
```

## Interacting with the Contract

### Via Etherscan
1. Go to your contract on Sepolia Etherscan: `https://sepolia.etherscan.io/address/<CONTRACT_ADDRESS>`
2. Click "Contract" tab to view verified source code
3. Use "Read Contract" section to call `getString()` and `owner()`
4. Connect your wallet and use "Write Contract" section to call owner-only functions

### Functions Available on Etherscan

#### Read Functions (No gas required)
- **getString**: Returns the currently stored string
- **owner**: Returns the address of the contract owner

#### Write Functions (Requires gas + owner wallet)
- **setString**: Update the stored string (owner only)
- **transferOwnership**: Transfer contract ownership to a new address (owner only)

## Security Features

- **Access Control**: Only the deployer (owner) can modify the stored string
- **Ownership Transfer**: Secure ownership transfer with zero-address protection
- **Event Logging**: All actions are logged via events for transparency
- **Public Reads**: Anyone can read the stored data without restrictions

## Example Usage

1. **Deploy contract** → You become the owner
2. **Set initial string**: Call `setString("Hello, World!")`
3. **Read string**: Anyone can call `getString()` to see "Hello, World!"
4. **Update string**: Only you can call `setString("Updated message")`
5. **Transfer ownership**: Call `transferOwnership(newOwnerAddress)` if needed

## Contract Address
Current deployment on Sepolia: `0xe079324c4095E9108EDf669c6A714a7CE1063094`

## License
MIT