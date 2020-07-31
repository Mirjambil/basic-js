const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  
  addLink(value) {
    if (typeof value === "undefined") {
      value = "undefined";
    } else if (value === null) {
      value = "null";
    } else if (typeof value === "boolean") {
      value = value ? "true" : "false";
    }
    this.chain.push(value.toString());
    return this;
  },
  
  removeLink(position) {
    if (!Number.isInteger(position) ) {
      this.chain = [];
      throw new Error();
    }
    let removed = this.chain.splice(position -1, 1);
    if (removed.length === 0) {
      this.chain = [];
      throw new Error();
    }
    return this;
  },
  
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    let res =  "( " + this.chain.join(' )~~( ') + " )";
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
