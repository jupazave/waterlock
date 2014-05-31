var testHelper = require('../../test_helper');
var should = testHelper.should;
var waterlock = testHelper.waterlock;
var proxyquire = testHelper.proxyquire.noCallThru();

describe('controller', function(){
  var auth = proxyquire('./../lib/templates/controllers/AuthController.js',{'waterlock': waterlock});
  describe('auth', function(){
    it('should exsit', function(done){
      auth.should.be.Object;
      done();
    });
  });
  var user = proxyquire('../lib/templates/controllers/UserController.js',{'waterlock': waterlock});
  describe('user', function(){
    it('should exist', function(done){
      user.should.be.Object;
      done();
    });
  });
});