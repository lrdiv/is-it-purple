var assert = require('assert');
var purple = require('../index');

describe('isPurple', function() {
  it('should return false for the color white', function() {
    assert.equal(purple.isPurple("255, 255, 255"), false);
  });

  it('should return false for the color black', function() {
    assert.equal(purple.isPurple("0, 0, 0"), false);
  });

  it('should return false for the color red', function() {
    assert.equal(purple.isPurple("#FF0000"), false);
  });

  it('should return false for an invalid value', function() {
    assert.equal(purple.isPurple('Goodnight, moon!'), false);
  });

  it('should return true for the color eggplant', function() {
    assert.equal(purple.isPurple('#816687'), false);
  });
});
