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

    var evt = nforce.createSObject('Device_Component__e', req.body);
    org.insert({ sobject: evt }, function(err, resp) {
        if (!err) {
            res.json({ success: "Event sent successfully", status: 200 });
            console.log('SUCCESS');
        } else {
            res.send(err.message);
            console.log(err.message);
        }
    });

});

module.exports = router;