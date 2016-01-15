/* jshint node: true */
/* jshint esnext: true */
'use strict';
const encryptionService = require("../service/encryptionService");

const editUrlGenerator = function () {

  var generateUrl = function (value) {
    var encrypted = encryptionService.encrypt(value);
    return constantUrlPart + encodeURIComponent(encrypted);
  };

  var getIdFromEncryptedUrl = function (url) {
    var encryptedPart = url.replace(constantUrlPart, '');
    return encryptionService.decrypt(encryptedPart);
  };

  return {
    generateEncryptedUrl: generateUrl,
    getIdFromEncryptedUrl: getIdFromEncryptedUrl
  };
}();

module.exports = editUrlGenerator;
