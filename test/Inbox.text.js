const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

// class Car{
//     park(){
//         return 'Stopped';
//     }
//     drive(){
//         return 'Vroom';
//     }
// }

// describe('Car',()=>{
//     it('can drive',()=>{
//         const car = new Car();
//         assert.strictEqual(car.park(),'Stopped');
//     });
// });

let accounts;
let inbox;

beforeEach(async () => {
    // web3.eth.getAccounts((err, res) => { console.log(res); });
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: ['Hi there']
        }).send({
            from: accounts[0],
            gas: '10'
        })
}); 

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);

    });
    it('has a default message', async () => {
        message = await inbox.methods.message().call();
        assert.strictEqual(message, 'Hi there');
    });
    it('modifies message correctly ', async () => {
        modified_message = 'This is the modified message';
        await inbox.methods.setMessage(modified_message).send({
            from: accounts[0]
        });
        var check_message = await inbox.methods.message().call();
        assert.strictEqual(check_message, modified_message);
    });
});