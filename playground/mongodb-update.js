//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    //message logged and function stopped
    return console.log('Unable to connect to mongoDB server.');
  }
  console.log("Connected to mongoDB server!");
// findOneAndUpdate

//  db.collection('Todos').findOneAndUpdate({
//    _id: new ObjectID("59aedd0147be3f27297e13f0")
//   }, {
//     $set:{
//       completed: true
//     }
//   }, {
//     returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("599ef34dbde1cd0ad40c4e8a")
 }, {
   $set:{
     name: 'Woodah#1'
 },
   $inc: { 
     age: 1 
      } 
    }, {
   returnOriginal: false
}).then((result) => {
 console.log(result);
});

  //db.close();

});


