const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [4, 'Username must be at least 4 characters'],
    maxlength: [50, 'Username cannot exceed 50 characters'],
    unique: [true, 'Username is already registered. Please try again'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email address is required to create account'],
    trim: true,
    unique: [true, 'Email address ia already registered. Please try again']
  },
  password: {
    type: String,
    required: [true, 'Password is required to create account'],
    minlength: [7, 'Password must be at least 8 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  }
});

const User = mongoose.model('User', UserSchema);
User.plugin(uniqueValidator);
module.exports = User;
