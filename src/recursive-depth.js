const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    if (!arr || !Array.isArray(arr)) {
      return 0;
    }
    if (!arr.length) {
    	return 1;
    }
    const self = this;
    const depthArr = arr.map(elem => self.calculateDepth(elem));
    const maxDepth = Math.max(...depthArr);
    return maxDepth +1
  }
};
