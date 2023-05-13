const express = require('express');
const server = express();

const bodyParser = express.urlencoded({ extended: true });

server.get('/', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Home</title>
      </head>
      <body>
        <h1>Hello Express</h1>
      </body>
    </html>
    `);
});

module.exports = server;
