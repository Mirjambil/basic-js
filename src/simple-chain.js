const chainMaker = {
  getLength() {
    return this.chain ? this.chain.length : 0;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = []
    } 
    this.chain.push(value !== undefined ? value : '');
    return this;
  },
  removeLink(position) {
    const length = this.chain && this.chain.length ? this.chain.length : 0;
    if (isNaN(position) || position >= length || position <1) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position-1,1);
    return this;
  },
  reverseChain() {
    if (this.chain) {
      this.chain.reverse();
    } 
    return this;
  },
  finishChain() {
    let result = '';
    if (this.chain) {
      result = this.chain.reduce((acc, item) => {
        acc = acc && acc.length ? `${acc}~~( ${item} )`: `( ${item} )`;
        return acc;
      }, '');
    }
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
