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

server.get('/colour', (req, res) => {
  const hexParam = req.query.hex ? '#' + req.query.hex : '#ffffff';

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

const cheeses = [];

server.get('/cheese', (req, res) => {
  const cheeseList = cheeses.map((cheese) => {
    return `<li>${cheese.name} | ${cheese.rating}</li>`;
  });

  res.send(`
      <body>
        <h1>Cheese Page</h1>

        <form action="/cheese" method="POST">
            <label for="name">Enter cheese name: </label><br />
            <input type="text" id="name" name="name"/><br />

            <label for="rating">Choose cheese rating: </label><br />
            <input type="range" min="0" max="5" id="rating" name="rating"/><br />

            <button type="submit">submit</button>
        </form>

        <ul>
            ${cheeseList.join('')}
        </ul>
      </body>
    `);
});

server.post('/cheese', bodyParser, (req, res) => {
  const cheese = req.body;
  cheeses.push(cheese);

  res.redirect('/cheese');
});

module.exports = server;
