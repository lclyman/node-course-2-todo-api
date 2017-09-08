const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59b309efbce99e1264101572';

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({
//   text: 'Walk the dog'
// }).then((todo) => {
//   console.log('FindOneTodo', todo);
// });

// Todo.findByIdAndRemove(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo ById', todo);
// }).catch((err) => console.log(err));