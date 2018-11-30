const router = require('express').Router();
const authRoutes = require('./auth.routes');
const bookRoutes = require('./book.routes');

module.exports = router.use('/auth', authRoutes).use('/books', bookRoutes);
