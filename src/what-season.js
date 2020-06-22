const CustomError = require("../extensions/custom-error");

const seasons = {
  winter : [0,1,11],
  spring: [2,3,4],
  summer: [5,6,7],
  autumn: [8,9,10]
};

module.exports = function getSeason( date ) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) && date.__proto__ !== Date.prototype && date.getMonth !== Date.prototype.getMonth) {
    throw new Error();
  }

  const month = Date.prototype.getMonth.call(date);
  return Object.keys(seasons).find(seasonName => seasons[seasonName].includes(month))
};
