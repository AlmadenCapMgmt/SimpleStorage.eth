# Simple Storage Smart Contract

A basic Ethereum smart contract for testing and learning purposes. This contract demonstrates fundamental blockchain concepts including state storage, gas usage, and event emission.

## What is SimpleStorage?

SimpleStorage is a minimal smart contract that allows you to:
- Store a single integer value on the blockchain
- Retrieve the stored value
- Track changes through blockchain events

## Use Cases

### 1. Learning & Education
- **Blockchain Fundamentals**: Understand how data is stored permanently on the blockchain
- **Gas Optimization**: Learn about transaction costs for storage operations
- **Event Logging**: See how smart contracts can emit events for off-chain monitoring

### 2. Testing Infrastructure
- **Network Testing**: Verify testnet connectivity and wallet configuration
- **Deployment Pipelines**: Test automated deployment scripts
- **Integration Testing**: Practice integrating smart contracts with dApps

### 3. Development Foundation
- **Contract Templates**: Use as a starting point for more complex contracts
- **Testing Patterns**: Reference for writing comprehensive test suites
- **Deployment Patterns**: Example of proper deployment script structure

## Contract Features

### Functions
- `set(uint256 x)` - Store a new value (costs gas)
- `get()` - Retrieve current value (free to call)

### Events
- `DataStored(uint256 indexed value, address indexed sender)` - Emitted when value changes

## Project Structure

```
smartcontract/
├── contracts/
│   └── SimpleStorage.sol      # Main smart contract
├── scripts/
│   └── deploy.js             # Deployment script
├── test/
│   └── SimpleStorage.test.js # Test suite
├── hardhat.config.js         # Hardhat configuration
├── package.json              # Dependencies and scripts
└── .env.example              # Environment template
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env with your credentials:
# - SEPOLIA_URL: Infura/Alchemy endpoint
# - PRIVATE_KEY: Your wallet private key
# - ETHERSCAN_API_KEY: For contract verification
```

### 3. Compile Contract
```bash
npm run compile
```

### 4. Run Tests
```bash
npm test
```

## Deployment

### Testnet Deployment
```bash
# Deploy to Sepolia testnet
npm run deploy:sepolia

# Deploy to Goerli testnet  
npm run deploy:goerli
```

### Local Testing
```bash
# Start local Hardhat node
npx hardhat node

# Deploy to local network
npx hardhat run scripts/deploy.js --network localhost
```

## Interaction Examples

### Using Hardhat Console
```bash
npx hardhat console --network sepolia
```

```javascript
// Get contract instance
const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
const contract = SimpleStorage.attach("YOUR_CONTRACT_ADDRESS");

// Read current value
await contract.get();

// Store new value
await contract.set(42);

// Listen for events
contract.on("DataStored", (value, sender) => {
  console.log(`Value ${value} stored by ${sender}`);
});
```

### Using Web3.js/Ethers.js
```javascript
// Store value
const tx = await contract.set(123);
await tx.wait();

// Read value
const value = await contract.get();
console.log("Stored value:", value.toString());
```

## Testing

The test suite covers:
- Initial state verification
- Value storage and retrieval
- Event emission verification
- Gas usage optimization

Run with: `npm test`

## Security Considerations

While this is a simple contract, consider these patterns for production:
- Access controls (OpenZeppelin's Ownable)
- Input validation
- Reentrancy protection
- Upgrade mechanisms

## Educational Value

This contract teaches:
1. **State Variables**: How blockchain stores data permanently
2. **Function Types**: view vs. state-changing functions
3. **Events**: How to log data for off-chain consumption
4. **Gas Costs**: Understanding transaction fees
5. **Testing**: Writing comprehensive smart contract tests

## Next Steps

Extend this contract by adding:
- Multiple storage slots
- Access control mechanisms
- Data structures (arrays, mappings)
- Integration with other contracts
- Frontend integration

## Resources

- [Hardhat Documentation](https://hardhat.org/docs)
- [Solidity Documentation](https://docs.soliditylang.org)
- [Ethereum Development](https://ethereum.org/developers)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts)

## License

MIT