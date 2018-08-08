var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/main');

//Get the graphs
router.get('/main', ctrlMain.getGraphs);



module.exports = router;
