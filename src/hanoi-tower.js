const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  return   { 
    turn: 2**disksNumber-1,
     sec: Math.floor(60/turnsSpeed*60*(2**disksNumber-1))
  }
};
