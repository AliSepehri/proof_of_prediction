require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});

const app = require('./index');
const port = process.env.PORT || 4000;

// TODO: Not proper config for production
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  next();
});

app.listen(port);

console.log('Todo list RESTful API server started on: ', port);

