const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const secrets = require('../config/secrets');

const auth = async(req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, secrets.jwtKey)
    const user = await userModel.findOne({ _id: data.id });
    if (!user) {
      throw new Error();
    }

    req.currentUser = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Not authorized to access this resource' });
  }
}
module.exports = auth;