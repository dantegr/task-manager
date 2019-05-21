const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser:true }, (error,client) => {
  if (error) {
   return console.log('Unable to connect to database!');
  }

  const db = client.db(databaseName);

  db.collection('tasks').insertMany([
    {
      description:'Clean dishes',
      completed: true
    }, {
      description:'Do udemy',
      completed: false
    }, {
      description:'Study swedish',
      completed: true
    },
  ], (error,result) => {
    if(error) {
      return console.log('Unable to insert tasks');
    }
    console.log(result.ops);
  });
});