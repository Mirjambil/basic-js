function createVigenereTable() {
  const iterable = {};
  iterable[Symbol.iterator] = function* () {
    let val = 'A';
    const charcodeA = 'A'.charCodeAt(0);
    let index = 0;
    while (val !== 'Z') {
      val = String.fromCharCode(charcodeA + index)
      index++
      yield val;
    }
  }

  const arr =[...iterable];
  const vigenereTable = {}
  arr.forEach((item, i) => {
    vigenereTable[item] = {};
    arr.forEach((val, idx) => {
      vigenereTable[item][val] = arr[(i+idx) % arr.length]
    })
  })
  return vigenereTable;
}

const vigenereTable = createVigenereTable();

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.vigenereTable = vigenereTable;
  }

  reverseRule(messageArr) {
    return this.direct ? messageArr : messageArr.reverse();
  }

  encrypt(message, key) {
    if (!message || !key)
      throw new Error();

    const res = []
    const startMsgArr = message.toUpperCase().split('');
    const ucKey = key.toUpperCase()
    const keyArr = ucKey.split('');
    if (ucKey.length < startMsgArr.length) {
      for (let i=0; i< startMsgArr.length - ucKey.length; i++) {
        keyArr.push(ucKey.charAt(i % ucKey.length))
      }
    }
    while(startMsgArr.length > 0) {
      const sign = startMsgArr.shift();
      if (Object.keys(this.vigenereTable).includes(sign)) {
        const key = keyArr.shift();
        const resultSign = this.vigenereTable[sign] ? this.vigenereTable[sign][key]: item;
        res.push(resultSign);
      } else {
        res.push(sign);
      }
    }
    return this.reverseRule(res).join('').toUpperCase();
  }    

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key)
      throw new Error();

    const startMsgArr = encryptedMessage.toUpperCase().split('');
    const res = []
    const ucKey = key.toUpperCase()
    const keyArr = ucKey.split('');
    if (ucKey.length < startMsgArr.length) {
      for (let i=0; i< startMsgArr.length - ucKey.length; i++) {
        keyArr.push(ucKey.charAt(i % ucKey.length))
      }
    }
    while(startMsgArr.length > 0) {
      const sign = startMsgArr.shift();
      if (Object.keys(this.vigenereTable).includes(sign)) {
        const key = keyArr.shift();
        const row = this.vigenereTable[key]
        const [k] = Object.entries(row).find(([k, val]) => val === sign)
        res.push(k);
      } else {
        res.push(sign);
      }
    }
    return this.reverseRule(res).join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
