'use strict';
/* jshint node: true */
/* jshint esnext: true */
/* global describe, beforeEach, afterAll, spyOn, it, expect, fail, jasmine */
const mockery = require('mockery');
const Q = require('q');

describe('participants service', () => {

    let dbHelperMock, participants;

    beforeEach(() => {
      mockery.enable({
        useCleanCache: true,
        warnOnReplace: false,
        warnOnUnregistered: false
      });

      mockery.resetCache();

      dbHelperMock = {
        select: jasmine.createSpy()
      };

      mockery.registerMock('../service/dbHelper', dbHelperMock);
      mockery.registerAllowables(['q', '../../service/dbHelper.js']);
      participants = require('../../service/participants');
      dbHelperMock.select.and.returnValue(Q.fcall(() => []));
    });

    describe('createUniqueToken', () => {

      beforeEach(() => {
        dbHelperMock.select.and.returnValue(Q.fcall(() => []));
      });

      it('returns a string with 5 upper case characters', (done) => {
        dbHelperMock.select.and.returnValue(Q.fcall(() => []));

        participants.createUniqueToken()
          .then((uniqueToken) => {
            expect(uniqueToken.length).toBe(5);
            expect(uniqueToken).toBe(uniqueToken.toUpperCase());
            done();
          })
          .fail(fail);
      });

      it('checks if the token exists in the DB', (done) => {
        dbHelperMock.select.and.returnValue(Q.fcall(() => []));

        participants.createUniqueToken().then((uniqueToken) => {
          expect(dbHelperMock.select).toHaveBeenCalledWith('select * from participants where paymenttoken like $1', [uniqueToken]);
          done();
        }).fail(fail);
      });

      it('regenerates the token if already present in the DB', (done) => {
        let callCounter = 0;

        function fakeSelect() {
          if (callCounter === 0) {
            callCounter = callCounter+1;
            return Q.fcall(() => ['someToken']);
          }
          return Q.fcall(() => []);
        }

        dbHelperMock.select.and.callFake(fakeSelect);

        participants.createUniqueToken().then((uniqueToken) => {
          expect(uniqueToken).toBeDefined();
          expect(dbHelperMock.select.calls.count()).toBe(2);
          done();
        });
      });
    });
  }
);
