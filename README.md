Emoji-favicon is middleware for _middlewared_ servers (connect, express). It ables to use emoji as favicon for web applications.
It helps to identify application in tabs mess.

You can find all emojis at [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/).

Totally based on [emoji-images](http://npmjs.org/package/emoji-images) package.


## Usage

Middleware get one string parameter. It should be emoji name. If such image not found it cause an error.

````
var connect = require('connect');
var emojiFavicon = require('emoji-favicon');

connect()
    .use(emojiFavicon('smiley'));
// ...
````

## Test

To see it in action do the following:

1. Install via npm.
2. Go to package directory in node_modules.
3. Start example http server.
4. Then open in browser [http://localhost:8080/](http://localhost:8080/).

```
npm install emoji-favicon
cd node_modules/emoji-favicon
npm start
```