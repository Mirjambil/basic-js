const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let separator = typeof options.separator === "undefined" ? "+" : options.separator;
  let additionSeparator = typeof options.additionSeparator === "undefined" ? "|" : options.additionSeparator;
  let addition =  typeof options.addition === "undefined" ? "" : options.addition;
  addition =  addition === null ? "null" : addition;
  let fullElement = (str === null ? "null" : str) + new Array(options.additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(options.repeatTimes).fill(fullElement).join(separator);
};
