// Purple hues: 265deg-330deg
// Purple saturation: > 5%
// Purple lightness: > 20%

var fs = require('fs');
var sass = require('node-sass');

// In our app this will come from params
var purple = "#FFFFFF";
if ( process.argv.length > 2 ) {
  purple = "#" + process.argv[2];
}

// Read our sass file
sassFile = fs.readFile('scss/purpulate.scss', 'utf8', function(err, data) {
  if (err) return console.log(err);

  // Prepend our sass file with the purple hex code.
  prependedVariable = "$purple: " + purple + ";";
  data = prependedVariable + data
  
  // Render the response from our sass file
  sass.render({
    data: data,
    outputStyle: 'compressed',
    success: function(css) {
      // Find the boolean value by splitting up the response
      res = css.split('*{purple:')[1].split(';}')[0];
      return console.log(res);
    },
    error: function(err) {
      return console.error("We couldn't parse your purple!");
    }
  });

});
