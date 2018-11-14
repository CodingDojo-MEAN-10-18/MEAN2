const express = require('express');
const parser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.resolve('dist/public')));

require('./server/config/database');

app.use(require('./server/routes'));
app.listen(port, () => console.log(`Express server listneing on port ${port}`));
