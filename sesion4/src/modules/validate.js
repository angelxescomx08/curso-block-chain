import Block from '../blockchain/block'

export default (blockchain)=>{
    const [genesis, ...blocks] = blockchain

    if(JSON.stringify(genesisBlock) !== JSON.stringify(Block.genesis)) throw Error('Invalid genesis block')

    for(let i=0;i<blocks.length;i++){
        const {previousHash,timestamp,hash,data} = blocks[i]
        const previousBlock = blockchain[i]
        if(previousHash !== previousBlock.hash) throw Error('Ivalid previous Hash')
        if(hash !== Block.hash(timestamp,previousHash,data))throw Error('Invalid hash')
    }

    return true
}