const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
let counter = 0;
arr.forEach((arr2) => {
	arr2.forEach((item) => {
		if (item === '^^')
			counter++;
	})
});
return counter;
};
