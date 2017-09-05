var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: [true, 'Must enter some text']
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// var newTodo = new Todo({
//   text: "Call mom"
// });

// newTodo.save().then((doc) => {
//   console.log(`Saved todo: ${doc}`);
// }, (err) => {
//   console.log('Unable to save todo', err);
// });

var User = mongoose.model('Users', {
  fname: {
    type: String,
    required: [true, 'You must enter a first name']
  },
  lname: {
    type: String,
    required: [true, 'You must enter alast name']
  },
  age: {
    type: Number,
    required:[true, 'You must enter your age']
  },
  password:{
    type: String,
    required: [true, 'You must enter a password']
  },
  email: {
    type: String,
    required: [true, 'You must enter your email address']
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

newUser = new User({
  fname: 'Larry',
  lname: 'Clyman',
  age: 61,
  password:'hello there',
  email: "lclyman@gmail.com"
});

newUser.save().then((doc) => {
  console.log(`Saved new user: ${doc}`);
}, (err) => {
  console.log('Unable to save user', err);
});