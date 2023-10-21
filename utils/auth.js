// This code functions as a middleware to check if the user is logged in or not.
const forAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = forAuth;