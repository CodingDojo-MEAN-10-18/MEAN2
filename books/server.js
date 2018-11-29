const cookieParser = require('cookie-parser');
const session = require('express-session');
const parser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cookieParser('aksldjfhalisdfhjlaskdjfhlasdjkfh'));
app.use(logger('dev'));
app.use(
  session({
    saveUninitialized: true,
    secret: 'SessionSecret',
    resave: false,
    name: 'session',
    rolling: true,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 3600000,
    },
  })
);
app.use(express.static(path.resolve('dist/public')));

require('./server/config/database');

app.use('/api', require('./server/routes'));
app.use(require('./server/routes/catch-all.route'));
app.listen(port, () => console.log(`Express server listneing on port ${port}`));
