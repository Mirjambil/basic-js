const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  if (!members || !Array.isArray(members) || !members.length) {
    return false;
  }

  const arr = members.reduce((arr2, item) => {
    if (typeof item === 'string' && item.length) {
      arr2.push(item.trim().slice(0,1).toUpperCase());
    }
    return arr2;
  }, [])
  return arr.sort().join('');
};
