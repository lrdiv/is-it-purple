is-it-purple.js
===============

Since our ancestors first began drawing stick figures on the walls of their caves, man has been plagued by one question:

**"Is this color considered purple?"**

Through science, maths, magic, and Sass, we now have the answer.

Usage
-----
1. `npm install is-it-purple`
2. `var purple = require('is-it-purple');`
3. `var isPurple = purple.isPurple("00FF00");`

### Note:
Hex codes should not be prepended with the hash / hashtag / pound sign / whatever.

### TODO:
- Better validation of hex codes. Accept 3 character strings. Accept strings with or without hash.
- Better error handling.
- Support check by array of rgb values.
