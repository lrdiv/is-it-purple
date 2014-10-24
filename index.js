// Purple hues: 265deg-330deg
// Purple saturation: > 5%
// Purple lightness: > 20%

module.exports = {
  minHue: 265,
  maxHue: 330,
  minSat: 0.05,
  minLight: 0.2,

  convertToRGB: function(input) {
    var rgb;

    if (input instanceof Array && input.length == 3) {
      return input;
    } 

    if (input.split(',').length == 3) {
      return input.split(',').map(function(item) {
        return parseInt(item);
      });
    } 

    if (input.length == 6 && input.indexOf('#') != 0) {
      input = "#" + input;
    }

    if (input.length != 7 || input.indexOf('#') != 0) {
      return false;
    }

    var r = parseInt(input.substr(1,2), 16);
    var g = parseInt(input.substr(3,2), 16);
    var b = parseInt(input.substr(5,2), 16);
    return [r, g, b];
  },

  convertToHSL: function(rgb) {
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];

    r /= 255, b /= 255, g /= 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      var d = max - min;
      if (l > 0.5) {
        s = d / (2 - max - min);
      } else {
        s = d / (max + min);
      }

      switch(max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return [h, s, l]
  },

  isPurple: function(hex) {
    var rgb = this.convertToRGB(hex);
    if (!rgb) return false

    var hsl = this.convertToHSL(rgb);

    var h = hsl[0] * 360;
    var s = hsl[1];
    var l = hsl[2];

    var isPurpleHue = (this.minHue <= h) && (h <= this.maxHue);
    var isPurpleSat = this.minSat <= s;
    var isPurpleLight = this.minLight <= l;

    return isPurpleHue && isPurpleSat && isPurpleLight;
  }
}
