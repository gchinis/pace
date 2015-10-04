/* jshint node: true */
'use strict';

var router = require('express').Router();
var participants = require('../service/participants');

router.get('/', function (req, res) {
    participants.getAll().then(function (result) {
        return res.render('participants/list', {participants: result});
    });
});

module.exports = router;
