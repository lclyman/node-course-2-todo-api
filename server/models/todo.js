var mongoose = require('mongoose');

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

module.exports = {Todo};

// var newTodo = new Todo({
//   text: "Call mom"
// });

// newTodo.save().then((doc) => {
//   console.log(`Saved todo: ${doc}`);
// }, (err) => {
//   console.log('Unable to save todo', err);
// });