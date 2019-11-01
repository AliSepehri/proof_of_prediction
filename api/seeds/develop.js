var mongoose = require('mongoose'),
  models = require('../app/models'),
  userModel = mongoose.model('Users'),
  predictionModel = mongoose.model('Predictions');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/proofOfPrediction_db');

(async function (){
  var john = new userModel({
    email: 'john@example.com',
    fullname: 'John Doe',
    createdAt: '2019-09-09'
  });
  await john.save()

  var prediction1 = new predictionModel({
    hash: 'e5734682839e13c91a75172ef859dbbf',
    createdAt: '20190-10-09',
    user: john._id
  })
  await prediction1.save();

  john.predictions.push(prediction1);
  await john.save();
})();