'use strict';

const should = require('should');

describe('maths', function(done) {

  var underTest;

  beforeEach(function(done) {
    underTest = require('../src/maths.js');    
    done();
  });

  it('should add numbers together when call add function', function(done) {
    var result = underTest.add(2,2);
    should.equal(result, 4, 'It did add the two values together');
    done();
  });

});
