const { Book } = require('../models');
// const Book = require('mongoose').model('Book');
const { Http } = require('@status/codes');

module.exports = {
  index(request, response) {
    console.log('sending all books');
    Book.find({})
      .then(books => response.json(books))
      .catch(console.log);
  },
  show(request, response) {
    Book.findById(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  update(request, response) {
    Book.findByIdAndUpdate(request.params.book_id, request.body, { new: true })
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  destroy(request, response) {
    Book.findByIdAndRemove(request.params.book_id)
      .then(book => response.json(book))
      .catch(console.log);
  },
};
