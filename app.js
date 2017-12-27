const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// mongoose.connect('mongodb://localhost/edu_blog');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Something will be here...');
});

app.listen(config.PORT, () => {
  console.log(`Listening on http://localhost:${config.PORT}`)
});
