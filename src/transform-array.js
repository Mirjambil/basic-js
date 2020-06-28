module.exports = function transform(initArr) {

  if (!Array.isArray(initArr)) {
    throw new Error();
  }

  const arr = [...initArr];
  const result = []

  arr.forEach ((item, i, arr) => {
    
    switch (item) {
      case 'REMOVED' :
        break;
      case 'DOUBLED' :
        break;
      case '--discard-prev' : {
        if (!result.length || !i) {
          break;
        }
        const prev = arr[i-1]
        if (prev !=='REMOVED') {
          result.pop();
          arr[i-1] = 'REMOVED'
        }
        break;
      }
      case '--double-prev' : {
        if (!result.length || !i) {
          break;
        }
        const prev = arr[i-1]
        if (prev !== 'REMOVED') {
          result.push(prev)
        }
        break;
      }
      case '--discard-next' : {
        if (i < arr.length-1) {
          arr[i+1] = 'REMOVED'
        }
        break;
      }
      case '--double-next' : {
        if (i < arr.length-1) {
          const next = arr[i+1]
          result.push(next)
        }
        break;
      }
      default: {
        result.push(item);
      }
    }
  })

  return result;
}
