module.exports = function repeater(initStr, opts = {}) {
  if (initStr === undefined) {
      throw new Error() 
    }
    const options = {...opts}
    options.addition = options.addition===undefined ? '' : options.addition;
    
    const str = `${initStr}`;
    let addVal = `${options.addition}`;
    
    const addArr = Array(options.additionRepeatTimes).fill(addVal);
    
    const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|'
    const addition = addArr.join(additionSeparator) ;
    
    const arr = Array(options.repeatTimes).fill(str).map(item => item + addition);
    return arr.join(options.separator || '+');
};
