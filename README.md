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
Hex codes should be a **string prepended with the hash / hashtag / pound sign / whatever.

### TODO:
- Better validation of hex codes. Accept 3 character strings. Accept strings with or without hash.
- Better error handling.
- Support check by array of rgb values.
