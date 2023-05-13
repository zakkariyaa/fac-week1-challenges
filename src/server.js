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

server.get('/colour', bodyParser, (req, res) => {
  const hexParam = '#' + req.query.hex || '#ffffff';

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

        <form action="/colour" method="GET">
            <label for="hex">Enter hex colour</label><br />
            <input type="text" id="hex" name="hex"/><br />
            <button type="submit">submit</button>
        </form>
      </body>
    </html>
    `);
});

module.exports = server;
