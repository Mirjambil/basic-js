const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
 
  if (!sampleActivity || typeof(sampleActivity) !== 'string')
		return false;
	
  const Num = Number.parseFloat(sampleActivity);
	
  if (isNaN(Num))
		return false;

	if(Num <=0 || Num > MODERN_ACTIVITY) 
    return false;
  
  const ratio = MODERN_ACTIVITY / Num;
	
  const a = 0.693 / HALF_LIFE_PERIOD;
		
  const r = Math.log(ratio) / a;
	
  return Math.ceil(r);
};
