const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error,client) => {
  if (error) {
   return console.log('Unable to connect to database!');
  }

  const db = client.db(databaseName);

  db.collection('users').find({age: 32}).toArray((error,user) => {
    if (error) {
      return console.log('Unable to fetch');
     }

     console.log(user);
  });

  db.collection('users').find({age: 32}).count((error,user) => {
    if (error) {
      return console.log('Unable to fetch');
     }

     console.log(user);
  });
});