import web3 from './web3';

const address = '0x9D12D9c409d2DE2CCd78beA3D2BAE16aB5C34093';
const abi = [
  {
    "constant":true,
    "inputs":[],
    "name":"manager",
    "outputs":[{"name":"","type":"address"}],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[],
    "name":"pickWinner",
    "outputs":[],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[],
    "name":"getPlayers",
    "outputs":[{"name":"","type":"address[]"}],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "constant":false,
    "inputs":[],
    "name":"enter",
    "outputs":[],
    "payable":true,
    "stateMutability":"payable",
    "type":"function"
  },
  {
    "constant":true,
    "inputs":[{"name":"","type":"uint256"}],
    "name":"players",
    "outputs":[{"name":"","type":"address"}],
    "payable":false,
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs":[],
    "payable":false,
    "stateMutability":"nonpayable",
    "type":"constructor"
  }
];

export defualt new web3.eth.Contract(abi, address);