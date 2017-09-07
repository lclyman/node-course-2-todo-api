const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59b16cc104c1d90cb057922811';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   completed: false
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   text: 'Walk Elmo'
// }).then((todo) => {
//   console.log('FindOneTodo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found.');
//   }
//   console.log('Todo ById', todo);
// }).catch((err) => console.log(err));

User.findById(id).then((user) => {
  if(!user){
    console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));