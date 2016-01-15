/* jshint node: true */
/* jshint esnext: true */
'use strict';
const cryptico = require("cryptico");

const editUrlGenerator = function () {

  const constantUrlPart = 'editparticipant/?edit=';
  const passPhrase = "Lauf gegen rechts!!";
  const key = cryptico.generateRSAKey(passPhrase, 512);
  const publicKeyString = cryptico.publicKeyString(key);

  var encrypt = function (value) {
    return cryptico.encrypt(value, publicKeyString).cipher;
  };

  var decrypt = function (encrypted) {
    return cryptico.decrypt(encrypted, key).plaintext;
  };

  return {
    decrypt: decrypt,
    encrypt: encrypt
  };
}();

module.exports = editUrlGenerator;
