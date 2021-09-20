import PKG from './package.json';
import Blockchain from './src/blockchain/blockchain';

const blockchain = new Blockchain();
console.log(blockchain);
blockchain.addBlock('Bloque 2')
console.log(blockchain)
