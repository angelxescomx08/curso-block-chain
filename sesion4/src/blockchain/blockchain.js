import Block from './block';

class Blockchain {

    constructor(){
        this.blocks = [Block.genesis];
    }

    addBlock(data) {
        const previousBlock = this.blocks[this.blocks.length - 1];
        const block = Block.mine(previousBlock, data);

        this.blocks.push(block);

        return block
    }

    replace (newBlocks = []){
        if( newBlocks.length < this.blocks.length ) throw Error ('The chain is not valid');
        try {
            //validate(newBlocks)
        } catch (error) {
            throw Error('The chain is not valid')
        }
    }
}

export default Blockchain;