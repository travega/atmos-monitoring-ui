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

router.get('/smart-engine', function(req, res, next) {
    res.render('engine-hmi', { title: 'Salesforce SCADA With Heroku...' });

});
/* Creates a new the record */

router.post('/danger', function(req, res, next) {
    console.log('SKP:: In router post');
    console.log(req.body);
    console.log('SKP :: SerialNumber :: ' + req.body.serial_number__c);

    var newEvent = nforce.createSObject('Engine_Component_Event__e');
    newEvent.set('serial_number__c', req.body.serial_number__c);
    newEvent.set('error_code__c', req.body.error_code__c);
    newEvent.set('temperature__c', req.body.temperature__c);
    newEvent.set('vibration__c', req.body.vibration__c);
    newEvent.set('humidity__c', req.body.humidity__c);
    newEvent.set('error_description__c', req.body.error_description__c);
    //org.org.insert({ sobject: newEvent });

    org.org.insert({ sobject: newEvent }, function(err, resp) {
        if (!err) {
            console.log('SUCCESS');
        } else {

            console.log(err.message);
        }
    });




});

module.exports = router;