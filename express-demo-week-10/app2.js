var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var baseRouter = require('./routers/base');
var userRouter = require('./routers/users');
var morgan = require('morgan');

app.set('views', './views');
app.set('view engine', 'ejs');

// logging
app.use(morgan('combined'));

// var myLogger = function(req, res, next) {
//   console.log('%s request %s from %s', req.method, req.path, req.ip);
//   next();
// };

// app.use(myLogger);

app.use('/', baseRouter);
app.use('/users', userRouter);

app.listen(port);
console.log('server started on ' + port);
