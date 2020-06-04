const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
let counter = 0;
arr.forEach((arr2, i) => {
	arr2.forEach((item, j) => {
		if (item === '^^')
			counter++;
	})
});
return counter;
};
