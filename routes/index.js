var express = require('express');
var router = express.Router();
var Promise = require("bluebird");
var nforce = require('nforce');
var org = require('../app');
const util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('scada-hmi', { title: 'Salesforce SCADA With Heroku...' });

});


/* Creates a new the record */

router.post('/danger', function(req, res, next) {
    console.log('SKP:: In router post');
    console.log(req.body);
    console.log('SKP :: SerialNumber :: ' + req.body.serial_number__c);

    var evt = nforce.createSObject('Device_Component__e', req.body);
    org.insert({ sobject: evt }, function(err, resp) {
        if (!err) {
            console.log('SUCCESS');
        } else {

            console.log(err.message);
        }
    });

});

module.exports = router;