'use strict';

const authMiddleware = require('../middlewares/auth');

module.exports = function(app) {
  var predictionController = require('../controllers/predictionController');

  app.route('/predictions')
    .get(authMiddleware, predictionController.index)
    .post(authMiddleware, predictionController.create)
  
  app.route('/predictions/:id')
    .get(authMiddleware, predictionController.show)
    .put(authMiddleware, predictionController.update)
    .delete(authMiddleware, predictionController.delete)
};
