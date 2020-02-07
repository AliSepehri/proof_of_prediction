require('../test_helper');

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
// const sinon = require('sinon');

const app = require('../../index');

chai.use(chaiHttp);

describe('Prediction Controller', function() {
  describe('#index', function() {
    it('should return 200', function(done) {
      chai.request(app)
          .get('/predictions')
          .end((err, res) => {
            expect(res.status).to.equal(200);
            done();
          });
    });
  });
});
