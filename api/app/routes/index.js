var predictionRoutes = require('./predictionRoutes'),
  sessionRoutes = require('./sessionRoutes');

module.exports = function(app) {
  predictionRoutes(app);
  sessionRoutes(app);
}
