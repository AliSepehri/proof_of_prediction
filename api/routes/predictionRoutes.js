'use strict';

module.exports = function(app) {
  var predictionController = require('../controllers/predictionController');

  app.route('/predictions')
    .get(predictionController.index)
    .post(predictionController.create)
  
  app.route('/predictions/:id')
    .get(predictionController.show)
    .put(predictionController.update)
    .delete(predictionController.delete)
};
