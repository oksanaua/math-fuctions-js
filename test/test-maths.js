'use strict';

const should = require('should');

describe('maths', function(done) {

  var underTest;

  beforeEach(function(done) {
    underTest = require('../src/maths.js');    
    done();
  });

  it('should add two numbers together', function(done) {
    var result = underTest.add(2,2);
    should.equal(result, 4, 'It did add the two values together');
    done();
  });

  it('should add a negative number to a positive number', function(done) {
    var result = underTest.add(-2,2);
    should.equal(result, 0, 'It did not add the negative and positives values together');
    done();
  });
  
  it('should subtract two numbers', function(done) {
    var result = underTest.subtract(2,2);
    should.equal(result, 0, 'It did not subtract the two numbers');
    done();
  });

});
