import Block from './block'

describe('Block',()=>{
    let timestamp
    let previousBlock
    let data
    let hash

    beforeEach(()=>{
        timestamp = new Date(2020,8,1)
        previousBlock = Block.genesis
        data = 'Test'
        hash = 'Hash'
    })

    it('Create an instance with parameter',()=>{
        const block = new Block(timestamp,previousBlock.hash,hash,data)
        expect(block.timestamp).toEqual(timestamp)
        expect(block.previousHash).toEqual(previousBlock.hash)
        expect(block.data).toEqual(data)
        expect(block.hash).toEqual(hash)
    })

    it('Use function hash()',()=>{
        hash = Block.hash(timestamp,previousBlock.hash,data)
        const HashOutput = 'd01077927fe5d34ce532ac47512e479d81caf173cfe7f3f760512e91000dc812'
        expect(hash).toEqual(HashOutput)
    })

    it('Use function toString()',()=>{
        const block = Block.mine(previousBlock,data)
        expect(typeof block.toString())
    })
})