const SHA256 = require('crypto-js/sha256')

class Block{

    constructor(index,data,previousHASH=''){
        this.index = index
        this.date = new Date()
        this.data = data
        this.previousHASH = previousHASH
        this.hash = this.createHASH()
        this.times = 0
    }

    createHASH(){
        return SHA256(this.index+this.date+this.data+this.times).toString()
    }

    mine(difficulty){
        while(!this.hash.startsWith(difficulty)){
            this.times++
            this.hash = this.createHASH()
        }
    }
}

class BlockChain{
    constructor(genesis,difficulty='0002345212s000000000escom'){
        this.chain = [this.createFirstBlock(genesis)]
        this.difficulty = difficulty
    }
    createFirstBlock(genesis){
        return new Block(0,genesis)
    }

    getLastBlock(){
        return this.chain[this.chain.length-1]
    }
    addBlock(data){
        let prevBlock = this.getLastBlock()
        let block = new Block(prevBlock.index+1,data,prevBlock.hash)
        block.mine(this.difficulty)
        console.log('Mined!'+block.hash+' con ' +block.times);
        this.chain.push(block)
    }
    isValid(){
        for(let i=1;i<this.chain.length;i++){
            let prevBlock = this.chain[i-1]
            let currentBlock = this.chain[i]

            if(currentBlock.previousHASH != prevBlock.hash){
                return false
            }

            if(currentBlock.createHASH() != currentBlock.hash){
                return false
            }
        }
        return true
    }
}

let Saturno = new BlockChain('Informacion del bloque genesis','00')
Saturno.addBlock('segunda transacción')
Saturno.addBlock('Tercera transacción')

console.log(Saturno.isValid())