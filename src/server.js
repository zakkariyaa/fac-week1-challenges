const express = require('express');
const server = express();

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

server.get('/colour', (req, res) => {
  const hexParam = req.query.hex ? '#' + req.query.hex : '#' + 'ffffff';

  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Colour</title>

        <style>
            body {
                background: ${hexParam};
            }
        </style>

      </head>
      <body>
        <h1>Colour Page</h1>
      </body>
    </html>
    `);
});

module.exports = server;
