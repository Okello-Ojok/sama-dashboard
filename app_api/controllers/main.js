var mongoose = require('mongoose');
var Graphs = mongoose.model('Data');
var request = require('request');

/*var sendJsonResponse = function(res, status, content, next) {
  res.status(status);
  res.json(content);
};*/
/*module.exports.getGraphs = function(req, res, next) {
  sendJsonResponse(res, 200, {
    "status": "success"
  });
};*/


module.exports.getGraphs = function (req, res, next) {
  Graphs
    .find().limit(6)
    //.select('name')
    .exec(function (err, main) {
      //sendJsonResponse(res, 200, main)
      return res.json(main);
    })
}
