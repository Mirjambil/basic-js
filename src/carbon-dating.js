const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
	if (!sampleActivity || typeof(sampleActivity) !== 'string')
		return false;
	const sampleActNum = Number.parseFloat(sampleActivity)
	if (isNaN(sampleActNum))
		return false;

	if(sampleActNum <=0 || sampleActNum > MODERN_ACTIVITY) return false

	const k = 0.693 / HALF_LIFE_PERIOD;
	const ratio =    MODERN_ACTIVITY / sampleActNum;
	const res = Math.log(ratio) / k
	return Math.ceil(res);
};
