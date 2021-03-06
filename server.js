const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitnesstracker', {
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true 
});

require('./routes/api')(app);
require('./routes/html')(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});