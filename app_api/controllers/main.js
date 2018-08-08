var mongoose = require('mongoose');
var Graphs = mongoose.model('Data');
//

var sendJsonResponse = function(res, status, content, next) {
  res.status(status);
  res.json(content);
};
/*module.exports.getGraphs = function(req, res, next) {
  sendJsonResponse(res, 200, {
    "status": "success"
  });
};*/


module.exports.getGraphs = function (req, res, next) {
  Graphs
    .find()
    .exec(function (err, main) {
      sendJsonResponse(res, 200, main)
    })
}

//module.exports = router;
