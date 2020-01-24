require('dotenv').config();
mongoose = require('mongoose');

require('./controllers/predictionController.test');

// TODO: Clear database before each test-case

after(function () {
  mongoose.disconnect();
});