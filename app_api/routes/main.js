var express = require('express');
var router = express.Router();
var d3 = require('d3');
var dc = require('dc');
var queue =require('queue');

var ctrlMain = require('../controllers/main');

//Get the graphs
router.get('/main', ctrlMain.getGraphs);


module.exports = router;
