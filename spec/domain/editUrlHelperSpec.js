'use strict';
/* jshint node: true */
/* jshint esnext: true */
/* global jasmine, describe, it, expect, beforeEach */

const crypto = require('crypto')

describe('editUrlHelper', () => {

  const editUrlHelper = require('../../domain/editUrlHelper.js');

  describe('generateSecureID', () => {

    it('should generate a cryptographically secure id', () => {
      spyOn(crypto, 'randomBytes').and.returnValue("testID");

      const secureID = editUrlHelper.generateSecureID();
      expect(crypto.randomBytes.calls.count()).toEqual(1);
      expect(crypto.randomBytes).toHaveBeenCalledWith(32);

      expect(secureID).toBe("testID");

    })

  })

})
