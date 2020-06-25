var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var expressSwagger = require('express-swagger-generator')(app);

var swaggerOption = require('./config/expressOption.json');

var indexRouter = require('./routes/index');
var todoRouter = require('./routes/todo');

expressSwagger(swaggerOption);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todo', todoRouter);

module.exports = app;
