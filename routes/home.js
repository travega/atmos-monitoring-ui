var express = require('express');
var router = express.Router();
var Promise = require("bluebird");
var nforce = require('nforce');
var org = require('../app');
const util = require('util');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Smart Expo Events Interaction With Heroku...' });
});

/* Creates a new bear notification record */
router.post('/', function(req, res, next) {
    console.log('Bear Request Init:: Send SCADA Event to Salesforce');
    console.log(JSON.stringify(req));

    var newEvent = nforce.createSObject('Device_Component__e');
    newEvent.set('serial_number__c', req.body.label);
    newEvent.set('error_code__c', req.body.eventMessage);
    org.insert({ sobject: newEvent })

});

module.exports = router;