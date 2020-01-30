const express = require('express');

const app = express();

const port = 8000;

app.get('/:echo', (req, res) => {
  res.send(req.params.echo);
});

app.listen(port, () => {
  console.log('OK');
});