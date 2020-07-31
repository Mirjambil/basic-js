const CustomError = require("../extensions/custom-error");

module.exports = function countCats(cats) {
  let c = 0;
    cats.forEach((cat) => {
	    cat.forEach((item) => {
		    if (item === '^^')
			    c++;
	  })
  });
  return c;
};
