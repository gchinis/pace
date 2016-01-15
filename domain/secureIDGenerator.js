/* jshint node: true */
/* jshint esnext: true */
'use strict';
const crypto = require("crypto");
const encryptionService = require("../service/encryptionService");

const secureIDGenerator = function () {

  var generateSecureID = function () {
    return encryptionService.encrypt(crypto.randomBytes(32));
  };

  return {
    generateSecureID: generateSecureID
  };
}();

module.exports = secureIDGenerator;
