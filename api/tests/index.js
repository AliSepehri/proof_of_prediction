require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});
mongoose = require('mongoose');

require('./controllers/predictionController.test');
// TODO: Clear database before each test-case

after(function () {
  mongoose.disconnect();
});