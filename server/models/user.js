const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('Users', {
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

module.exports = {User};


// newUser = new User({
//   name: 'Jonathan Clyman',
//   age: 59,
//   email: "jcclyman@gmail.com   ",
//   isMember: true
// });

// newUser.save().then((doc) => {
//   console.log(`Saved new user: ${doc}`);
// }, (err) => {
//   console.log('Unable to save user', err);
// });