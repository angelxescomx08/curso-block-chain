import { SHA256 } from 'crypto-js';

class Block {

    constructor( timestamp, previousHash, hash, data ){
        this.timestamp = timestamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }

    static get genesis() {
        const timestamp = (new Date(2000, 0, 1)).getTime();
        return new this(timestamp, undefined, 'Bloque genesis', 'Primero bloque de toda la cadena');
    }

    static hash(timestamp, previousHash, data){
        return SHA256(`${timestamp}${previousHash}${data}`).toString();
    }

    static mine(previousBlock, data) {
        const timestamp = Date.now();
        const { hash: previousHash } = previousBlock; // { Atributo del objeto a destruir : Nuevo nombre del atributo }
        const hash = Block.hash(timestamp, previousHash, data);

        return new this(timestamp, previousHash, hash, data);
    }

    toString() {

        const { timestamp, previousHash, hash, data } = this; //This es el objeto que se manda a llamar a si mismo

        return `Block -
            Fecha           : ${timestamp}
            PreviousHash    : ${previousHash}
            Hash            : ${hash}
            data            : ${data}
        `;
    }
}

export default Block;