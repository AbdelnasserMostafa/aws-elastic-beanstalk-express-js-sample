const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! This is Nasser learning CI with AWS'.  I adding changes to this message!!));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
