const bcrypt = require('bcryptjs');
const db = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
// POST Register - Create New User
const signup = (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    return res.status(400).json({
      status: 400,
      message: 'Please enter your name, email and password'
    });
  }
  // Verify Account Does Not Already Exist
  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong. Please try again'
      });

    if (foundUser)
      return res.status(400).json({
        status: 400,
        message: 'Email address has already been registered. Please try again'
      });

    // Generate Salt
    bcrypt.genSalt(10, (err, salt) => {
      if (err)
        return res.status(500).json({
          status: 500,
          message: 'Something went wrong. Please try again'
        });

      // Hash User Password
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err)
          return res.status(500).json({
            status: 500,
            message: 'Something went wrong. Please try again'
          });

        const newUser = {
          username: req.body.username,
          email: req.body.email,
          password: hash
        };

        db.User.create(newUser, (err, savedUser) => {
          if (err) return res.status(500).json({ status: 500, message: err });
          jwt.sign({foo: savedUser._id }, `${process.env.JWT_SECRET}`, { expiresIn: '10h' }, (err, jwt) => {
            if (err) return res.status(500).json({
              status: 503,
              errors: [{ message: 'access forbidden' }],
            });
            res.status(200).json({ jwt });
          });
        });
      });
    });
  });
};

// POST Login - Authenticate User, create session
const login = (req, res) => {
  // console.log(req.body);
  if (!req.body.email || !req.body.password) {
    return res
      .status(400)
      .json({ status: 400, message: 'Please enter your email and password' });
  }

  db.User.findOne({ email: req.body.email }, (err, foundUser) => {
    if (err)
      return res.status(500).json({
        status: 500,
        message: 'Something went wrong. Please try again'
      });

    if (!foundUser) {
      return res
        .status(400)
        .json({ status: 400, message: 'Username or password is incorrect' });
    }

    bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
      if (err)
        return res.status(500).json({
          status: 500,
          message: 'Something went wrong. Please try again'
        });

      if (isMatch) {
        /* jwt */
        jwt.sign({foo: foundUser._id }, `${process.env.JWT_SECRET}`, { expiresIn: '10h' }, (err, jwt) => {
          if (err) return res.status(500).json({
            status: 503,
            errors: [{ message: 'access forbidden' }],
          });
          res.status(200).json({ jwt });
          // res.status(201).json({message: 'Logged In'});
        });
      } else {
        return res
          .status(400)
          .json({ status: 400, message: 'Username or password is incorrect' });
      }
    });
  });
};



module.exports = {
  signup,
  login,

};
