is-it-purple
============

Since our ancestors first began drawing stick figures on the walls of their caves, man has been plagued by one question:

**"Is this color considered purple?"**

Through science, maths, magic, and science, we now have the answer.

Usage
-----
#### In your terminal:

`npm install is-it-purple`

#### In your project:

```javascript
var purple = require('is-it-purple');
var isPurple = purple.isPurple("#00FF00");
```

### Note:
The `isPurple` function can accept the following inputs:
- A string containing a hex code prepended with `#`, eg: `"#816687"`
- A string containing a hex code not prepended with `#`, eg: `"816687"`
- A string containing comma-separated RGB values, eg: `"129, 102, 135"`
- An array containing RGB values, eg: `[129, 102, 135]`

### TODO:
- Accept 3 character strings.
