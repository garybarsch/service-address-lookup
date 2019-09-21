const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const index = require('./routes/index');
const error = require('./routes/error');
const lookup = require('./routes/lookup');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/', index);
app.use('/lookup', lookup);
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(error);
module.exports = app;