# express-bang
Send http-friendly error objects in express.

## Install
```sh
npm install --save express-bang
```

## Usage

```js
// commonJS
const expressBang = require('express-bang');

// ESM
import expressBang from 'express-bang';

app.use(expressBang());


app.get("/test", (req, res) => {
    res.bang.badRequest("Internal Server Error");
});
```

## Why expressbang?
The package is heavily inspired from boom error objects and express middleware package called - [express-boom](https://www.npmjs.com/package/express-boom).
Unlike `express-boom`, `express-bang` is a standalone implementation and doesn't depend on any third-party package for getting methods.
