require('dotenv').config({ path: `.env.${process.env.NODE_ENV}`});

const app = require('./index');
const port = process.env.PORT || 4000;

app.listen(port);

console.log('Todo list RESTful API server started on: ', port);

