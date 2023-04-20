const assert = require('assert');
const request = require('supertest');
const app = require('./index.js');

describe('Index', function() {
  describe('GET /', function() {
    it('should return 200 status code', function(done) {
      request(app)
        .get('/')
        .expect(200)
        .end(function(err, res) {
          if (err) done(err);
          done();
        });
    });
  });
});
