const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must enter your name']
  },
  age: {
    type: Number,
    required:[true, 'You must enter your age']
  },
  email: {
    type: String,
    required: [true, 'You must enter your email address.'],
    minlength: [1, 'Email must contain at least 1 character'],
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message:`{VALUE} is not a valid email address!`
    }
  },
  dateAdded: {
    type: Date,
    default: Date.now
  },
  password:{
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.methods.toJSON = function() {
  var user = this;
  var userObject = user.toObject();

  return _.pick(userObject, ['_id', 'name', 'age', 'email', 'dateAdded']);
}

// must use es5 function syntax for 'this' use
UserSchema.methods.generateAuthToken = function() {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
};

var User = mongoose.model('Users', UserSchema );

module.exports = {User};