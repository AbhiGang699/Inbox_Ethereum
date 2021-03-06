const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'learn bamboo sight pioneer arena decide move hour sword report amateur speed',
    'https://rinkeby.infura.io/v3/9316285b935944d8961981824bc6710e'
);

const web3 = new Web3(provider);

const deploy = async () => {
    accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    var contract_address=null;
    try {
        contract_address = await new web3.eth.Contract(JSON.parse(interface)).deploy({
            data: bytecode,
            arguments: ['This is the initial argument']
        }).send({
            from: accounts[0],
            gas: '1000000'
        });
    }
    catch (e) {
        console.log(e);
    }

    console.log('Contract is deployed at the address', contract_address);
};
deploy();

// 0x9BeaA55861A01F647bCa9019e18eE5Eee86A9917