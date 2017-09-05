//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Larry Clyman', age:61};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    //message logged and function stopped
    return console.log('Unable to connect to mongoDB server.');
  }
  console.log("Connected to mongoDB server!");

  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //    return console.log('Unable to insert todo');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  // db.collection('Users').insertOne({
  //   name: 'Jonathan Clyman',
  //   age: 59,
  //   location: {
  //     address:'1234 Main St',
  //     city: 'New Paltz',
  //     state: 'NY',
  //     zip: '12259'
  //   }
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user');
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
  
});


