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

  // db.collection('Todos').find({_id: new ObjectID('599e00bd52bf6d07441a05b6')}).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Number of Todos: ${count}`);
  //   console.log(count);
  // },(err) => {
  //   console.log('Unable to fetch todos', err);
  // });

    db.collection('Users').find({name: 'Jonathan Clyman'}).toArray().then((docs) => {
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();

});


