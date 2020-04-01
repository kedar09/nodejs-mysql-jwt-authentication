var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');

const jwt = require("jsonwebtoken");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth',authRouter);
app.use('/users',jwtVerify ,usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

function jwtVerify (req, res, next) {
  console.log('verifying token...')
  
  if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
      try {
        //   console.log(token)
        result = jwt.verify(token, 'httpskedar');
        req.decoded = result;
        // console.log(result);
        next();
      } catch (err) {
      result = { 
        error: `Unauthorized`,
        status: 401
      };
           res.status(401).send(result);
        // throw new Error(err);
      }
    } else {
      result = { 
        error: `Unauthorized error. Token required.`,
        status: 401
      };
      res.status(401).send(result);
    }
}

module.exports = app;
