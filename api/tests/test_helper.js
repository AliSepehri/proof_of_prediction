process.env.NODE_ENV = process.env.NODE_ENV || 'test';

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});
mongoose = require('mongoose');

after(function () {
  mongoose.disconnect();
});