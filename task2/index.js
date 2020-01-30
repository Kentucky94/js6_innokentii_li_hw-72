const express = require('express');

const app = express();

const port = 8001;

const Vigenere = require('caesar-salad').Vigenere;

app.get('/encode/:word', (req, res) => {
  res.send(Vigenere.Cipher('password').crypt(req.params.word));
});

app.get('/decode/:word', (req, res) => {
  res.send(Vigenere.Decipher('password').crypt(req.params.word));
});

app.listen(port, () => {
  console.log('Working fine');
});