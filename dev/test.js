const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const previousBlockHash = 'OIOIOSDAIOIWIE';
const currentBlockData = [
    {
        amount: 10,
        sender: 'N9901N',
        recipient: 'M0NG0L1A'
    },
    {
        amount: 30,
        sender: 'G425ML',
        recipient: 'ST3V3'
    },
    {
        amount: 200,
        sender: 'HML51',
        recipient: 'B0NN3T'
    }
];
const nonce = 100;

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 31814));