import Web3 from 'web3';

// uses the provider in the window
const provider = window.web3.currentProvider;
const web3 = new Web3(provider);

export default web3;