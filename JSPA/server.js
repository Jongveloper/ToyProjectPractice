const express = require('express');
const path = require('path');

const app = express();

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('client', 'index.html'));
});

app.listen(3000, () => {
  console.log('서버 시작');
});
