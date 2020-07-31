const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let counts = 0;
        if (Array.isArray(arr)) {
            let m = 0;
            arr.map(item => {
                let n = this.calculateDepth(item);
                if (n > m) m = n;
            });
            counts = m + 1;
        }
        return counts;
    }
};
