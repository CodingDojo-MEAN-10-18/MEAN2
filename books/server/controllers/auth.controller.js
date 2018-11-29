const User = require('mongoose').model('User');
const { Http } = require('@status/codes');

module.exports = {
  login(request, response) {
    const { email, password } = request.body;

    User.findOne({ email })
      .then(user => {
        return User.validatePassword(password, user.password).then(valid => {
          if (!valid) throw new Error();

          // login
        });
      })
      .catch(() => {
        response
          .status(Http.Unauthorized)
          .json('email/password combo not found');
      });
  },
  register(request, response) {
    console.log('register', request.body);

    User.create(request.body)
      .then(user => {
        // login
      })
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );

        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  logout(request, response) {},
};
