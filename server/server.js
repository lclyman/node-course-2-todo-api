const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const {mongoose} = require('./db/mongoose');

const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body);
  let todo = new Todo({
  text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });

});

app.post('/users', (req, res) => {
  let user = new User({
  name: req.body.name,
  age: req.body.age,
  email: req.body.email,
  isMember: req.body.isMember
  });

  user.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });

});

// list all the todos
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

// get a single todo
app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Not a valid ID');
  }

  Todo.findById(id).then((todo) => {
    if(!todo){
      return res.status(404).send('Todo not found');
    }

    res.send({todo});

  }).catch((err) => { 
    res.status(400).send('There was a problem with the request. Please try again');
  });

});

// list all the users
app.get('/users', (req, res) => {
  User.find().then((users) => {
    res.send({users});
  }, (err) => {
    res.status(400).send(err);
  });
});

// get a single user
app.get('/users/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Not a valid ID');
  }

  User.findById(id).then((user) => {
    if(!user){
      return res.status(404).send('User not found');
    }

    res.send({user});

  }).catch((err) => { 
    res.status(400).send('There was a problem with the request. Please try again');
  });

});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Not a valid ID');
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if(!todo){
      return res.status(404).send('Todo not found');
    }

    res.send({todo});

  }).catch((err) => { 
    res.status(400).send('There was a problem with the request. Please try again');
  });

});

app.delete('/users/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Not a valid ID');
  }

  User.findByIdAndRemove(id).then((user) => {
    if(!user){
      return res.status(404).send('User not found');
    }

    res.send({user});

  }).catch((err) => { 
    res.status(400).send('There was a problem with the request. Please try again');
  });

});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});