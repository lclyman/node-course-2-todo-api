//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    //message logged and function stopped
    return console.log('Unable to connect to mongoDB server.');
  }
  console.log("Connected to mongoDB server!");

 // deleteMany

  // db.collection('Users').deleteMany({name: 'Jonathan Clyman'}).then((result) => {
  //   console.log(result);
  // });

    // db.collection('Users').deleteMany({name: 'Jonathan Clyman'});

 // deleteOne

  db.collection('Users').findOneAndDelete({_id: new ObjectID("59aeea3c47be3f27297e1770")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

 // findOneAndDelete

//  db.collection('Todos').findOneAndDelete({text: 'Return kindle book'}).then((result) => {
//   console.log(result);
// });


  //db.close();

});


