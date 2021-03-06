'use strict';

const authMiddleware = require('../middlewares/auth');

module.exports = function(app) {
  var predictionController = require('../controllers/predictionController');

  app.route('/predictions')
    .get(predictionController.index)
    .post(authMiddleware(true), predictionController.create)
  
  app.route('/predictions/:transactionId')
    .get(predictionController.show)
    .delete(authMiddleware(), predictionController.delete)
};
