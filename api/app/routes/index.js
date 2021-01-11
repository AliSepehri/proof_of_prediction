var predictionRoutes = require('./predictionRoutes'),
  sessionRoutes = require('./sessionRoutes');

var homeController = require('../controllers/homeController');

module.exports = function(app) {
  app.route('/')
  .get(homeController.index);

  predictionRoutes(app);
  sessionRoutes(app);
}
