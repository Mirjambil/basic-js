const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        return this.crypt(message, key, 'encrypt');
    }

    decrypt(encryptedMessage, key) {
        return this.crypt(encryptedMessage, key, 'decrypt');
    }

    crypt(message, key, mode) {
        if (!message && !key) throw Error()
        message = message.toUpperCase();
        key = key.toUpperCase();
        const res = [];
        for (let i = 0, j = 0; i < message.length; i++) {
            if (message [i].match(/[A-Z]/)) {
                if (mode === 'decrypt') {
                    res.push(String.fromCharCode((message[i].charCodeAt(0) - 'A'.charCodeAt(0) + (26 - (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0)))) % 26 + 'A'.charCodeAt(0)));
                }
                if (mode === 'encrypt') {
                    res.push(String.fromCharCode((message[i].charCodeAt(0) - 'A'.charCodeAt(0) + (key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0))) % 26 + 'A'.charCodeAt(0)));
                }
                j++
            } else {
                res.push(message[i])
            }
        }
        return this.direct ? res.join('') : res.reverse().join('')
    }

}

module.exports = VigenereCipheringMachine;
