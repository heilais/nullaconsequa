import Web3 from 'web3';

// Initialize a Web3 instance only once and export it for reuse
const web3Instance = (() => {
  const provider = new Web3.providers.HttpProvider('http://localhost:8545');
  return new Web3(provider);
})();

export default web3Instance;
