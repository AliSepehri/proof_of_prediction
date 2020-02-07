require('../test_helper');

const chai = require('chai');
const expect = chai.expect;
const request  = require('supertest');

const mongoose = require('mongoose');
const models = require('../../app/models');
const Prediction = mongoose.model('Predictions');

const app = require('../../index');

describe('Prediction Controller', function() {
  beforeEach((done) => {
    Prediction.deleteMany({}, ()=> done());
  });

  describe('#index', function() {
    it('should return 200', function(done) {
      request(app)
        .get('/predictions')
        .end((_err, res) => {
          expect(res.status).to.equal(200);
          done();
        })
    });

    it('should return created prediction', function(done) {
      const prediction = new Prediction({
        hash: 'e5734682839e13c91a75172ef859dbbf'
      });
      prediction.save(() => {
        request(app)
          .get('/predictions')
          .end((_err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('array');
            expect(res.body).to.have.lengthOf(1);
            expect(res.body[0]).to.have.property('_id');
            expect(res.body[0]).to.have.property('hash');
            expect(res.body[0]).to.have.property('createdAt');
            done();
          });
      });
    });
  });

  describe('#show', function() {
    it('should return prediction by id', function(done){
      const prediction = new Prediction({
        hash: 'e5734682839e13c91a75172ef859dbbf'
      });

      prediction.save((_err, prediction) => {
        request(app)
          .get(`/predictions/${prediction._id}`)
          .end((_err, res) => {
            expect(res.status).to.equal(200);
            expect(res.body).to.be.a('object');
            expect(res.body).to.have.property('_id');
            expect(res.body).to.have.property('hash');
            expect(res.body).to.have.property('createdAt');

            expect(res.body.hash).to.equal(prediction.hash);
            done();
          });
      });
    });

    it('should return 404 by invalid id', function(done){
      request(app)
        .get('/predictions/invalid_id')
        .end((_err, res) => {
          expect(res.status).to.equal(404);
          done();
        });
    });
  });

  describe('#create', function(){
    it('should create a prediction', function(done){
      prediction_attrs = {
        hash: 'e5734682839e13c91a75172ef859dbbf'
      };

      request(app)
        .post('/predictions')
        .send(prediction_attrs)
        .end((_err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.a('object');
          expect(res.body).to.have.property('_id');
          expect(res.body).to.have.property('hash');
          expect(res.body).to.have.property('transactionId');
          expect(res.body).to.have.property('createdAt');
          done();
        });
    });

    it('should return 422, "hash" is required', function(done){
      request(app)
        .post('/predictions')
        .send({})
        .end((_err, res) => {
          expect(res.status).to.equal(422);
          done();
        });
    });
  });
});
