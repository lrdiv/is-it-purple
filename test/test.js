var assert = require('assert');
var purple = require('../index');

describe('convertToRGB', function() {
  it('should return an array passed as an array', function() {
    assert.deepEqual(purple.convertToRGB([255, 255, 255]), [255, 255, 255]);
  });

  it('should return an array when passed as string array', function() {
    assert.deepEqual(purple.convertToRGB("255, 255, 255"), [255, 255, 255]);
  });

  it('should return an array from a hex code prepended with #', function() {
    assert.deepEqual(purple.convertToRGB("#FFFFFF"), [255, 255, 255]);
  });

  it('should return an array from a hex code not prepended with #', function() {
    assert.deepEqual(purple.convertToRGB("FFFFFF"), [255, 255, 255]);
  });

  it('should return false for invalid values', function() {
    assert.equal(purple.convertToRGB("Hello, world!"), false);
  });
});

describe('convertToHSL', function() {
  it('should return an HSL array for a valid RGB array', function() {
    assert.equal(purple.convertToHSL([255, 255, 255]) instanceof Array, true);
    assert.equal(purple.convertToHSL([255, 255, 255]).length, 3);
  });
});

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
    assert.equal(purple.isPurple('#816687'), true);
  });
});
