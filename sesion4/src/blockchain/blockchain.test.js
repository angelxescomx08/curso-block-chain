import Blockchain from './blockchain'
import Block from './block'

describe('Blockchain',()=>{
    let blockchain

    beforeEach(()=>{
        blockchain = new Blockchain()
    })

    it('Use function addBlock()',()=>{
        const data = 'Data'
        blockchain.addBlock(data)
        const [,lastBlock] = blockchain.blocks
        expect(lastBlock.data).toEqual(data)
        expect(blockchain.blocks.length).toEqual(2)
    })
})