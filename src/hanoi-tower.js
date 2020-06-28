const secInHour = 3600; // 60 * 60;
module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  if (isNaN(disksNumber) || isNaN(turnsSpeed)) {
    throw new Error()
  }
  const turns = Math.pow(2, disksNumber) - 1
  const hours = (turns / turnsSpeed )
  const seconds = Math.floor(hours *  secInHour)
  const res = {
    turns,
    seconds
  };
  return res;
};
