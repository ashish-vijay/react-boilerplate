const express = require('express');
var app = express();

const publicPath = './public';

app.use(express.static(publicPath));

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
