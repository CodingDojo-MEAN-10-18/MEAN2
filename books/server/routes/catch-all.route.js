const router = require('express').Router();
const path = require('path');

module.exports = router.all('*', function(request, res) {
  res.sendFile(path.resolve('dist/public/index.html'));
});
