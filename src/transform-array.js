const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 if (!Array.isArray(arr)) {
    throw new Error();
  }

  let newArr=[];
  let del = false;
  
  for (let i=0; i<arr.length; i++) {
    if (typeof arr[i] === "string") {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          del = true;
          break;
        case "--discard-prev":
          if (!del) {
            newArr.pop()
          }
          break;
        case "--double-next":
          if (i === arr.length-1) {
            continue;
          }
          newArr.push(arr[i + 1]);
          del = false;
          break;
        case "--double-prev":
          if (i === 0) {
            continue;
          }
          if (!del) {
            newArr.push(arr[i - 1]);
            del = false;
          }
          break;
        default:
          newArr.push(arr[i]);
          del = false;           
      }
    }
    else {
      newArr.push(arr[i]); 
      del = false;   
    }
  }

  return newArr;
};
