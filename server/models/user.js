var mongoose = require('mongoose');

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
    trim: true
  },
  isMember:{
    type: Boolean,
    default: false
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
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