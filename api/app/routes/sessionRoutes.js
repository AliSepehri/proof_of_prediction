'use strict';

module.exports = function(app) {
  var sessionController = require('../controllers/sessionController');

  app.route('/sessions')
    .post(sessionController.create);
}