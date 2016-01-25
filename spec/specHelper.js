/* jshint node: true */
/* jshint esnext: true */
/* global jasmine */
'use strict';

let ParticipantBuilder = function() {
  let self = {};
  let internalObj = {}

  self.initDefault = function() {
    internalObj.firstname = 'Martin';
    internalObj.lastname = 'Fowler';
    internalObj.email = 'test@example.com';
    internalObj.category = 'm';
    internalObj.birthyear = 1963;
    internalObj.team = 'ThoughtWorks';
    internalObj.visibility = 'no';

    internalObj.tshirt = {
      details: [{ size: 'S', model: 'Normal fit' }],
      amount: 0
    }

    return self;
  }

  self.withVisibility = function(visibility) {
    internalObj.visibility = (visibility == true) ? 'yes' : 'no'
    return self
  }

  self.withTshirt = function(shirtSize, shirtModel) {
    internalObj.tshirt = {
      details : [
        {
          size : shirtSize,
          model : shirtModel
        }
      ],
      amount : 1
    }

    return self;
  }

  self.withEmail = function(inputEmail) {
    internalObj.email = inputEmail;
    return self;
  }

  self.withFirstname = function(inputFirstname) {
    internalObj.firstname = inputFirstname;
    return self;
  }

  self.withLastname = function(inputLastname) {
    internalObj.lastname = inputLastname;
    return self;
  }

  self.withCategory = function(inputCategory) {
    internalObj.category = inputCategory;
    return self;
  }

  self.withBirthyear = function(inputBirthyear) {
    internalObj.birthyear = inputBirthyear;
    return self;
  }

  self.withTeam = function(inputTeam) {
    internalObj.team = inputTeam;
    return self;
  }

  self.build = function() {
    return internalObj;
  }

  return self
}

module.exports = {ParticipantBuilder : ParticipantBuilder};