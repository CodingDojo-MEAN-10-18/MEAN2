const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [2, 'Your title must be longer than 2 characters'],
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  year: Number,
  pages: {
    type: Number,
    min: 1,
    required: true,
  },
  publisher: String,
});

module.exports = mongoose.model('Book', BookSchema);
