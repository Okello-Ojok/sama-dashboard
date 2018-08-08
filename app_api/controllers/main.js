var mongoose = require('mongoose');
//var graphs = mongoose.model('Location');


var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports.getGraphs = function(req, res) {
  sendJsonResponse(res, 200, {
    "status": "success"
  });
};

//module.exports = router;
