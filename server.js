const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.use('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'dist/index.html'))
);
app.listen(3000, () => console.log('App listening on port 3000'));
