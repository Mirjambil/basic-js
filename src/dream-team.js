const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!members || !Array.isArray(members) || !members.length) {
    return false;
  }

  const arr = members.reduce((acc, item) => {
    if (typeof item === 'string' && item.length) {
      acc.push(item.trim().slice(0,1).toUpperCase());
    }
    return acc;
  }, [])
  return arr.sort().join('');
};
