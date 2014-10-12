is-it-purple.js
===============

Since our ancestors first began drawing stick figures on the walls of their caves, man has been plagued by one question:

**"Is this color considered purple?"**

Through science, maths, magic, and Sass, we now have the answer.

Usage
-----
1. `git clone https://github.com/lrdiv/is-it-purple.js.git`
2. `cd is-it-purple.js` (or whatever you named the directory)
3. `node server.js {{hex code}}`

### Note:
Hex codes should not be prepended with the hash / hashtag / pound sign / whatever.

### Example:

`$ node server.js 881d86`

`=> true`

`$ node server.js 001010`

`=> false`

`$ node server.js InvalidHexCode`

`=> "We couldn't parse your purple."`
