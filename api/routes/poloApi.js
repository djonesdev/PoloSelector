var express = require('express');
var polos = require('../resources/polo-variants.json')
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send(polos);
});

module.exports = router;