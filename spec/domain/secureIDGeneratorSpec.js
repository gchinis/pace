'use strict';
/* jshint node: true */
/* jshint esnext: true */
/* global jasmine, describe, it, expect, beforeEach */

const crypto = require('crypto')
const encryptionService = require('../../service/encryptionService');

describe('secureIDGenerator', () => {

  const secureIDGenerator = require('../../domain/secureIDGenerator.js');

  describe('generateSecureID', () => {

    it('should generate a cryptographically secure id', () => {
      spyOn(crypto, 'randomBytes').and.returnValue("testID");

      const encryptedSecureID = secureIDGenerator.generateSecureID();
      expect(crypto.randomBytes.calls.count()).toEqual(1);
      expect(crypto.randomBytes).toHaveBeenCalledWith(32);

      expect(encryptionService.decrypt(encryptedSecureID)).toBe("testID");

    })

  })

})
