var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(MONGO_CONNECTION_STRING, function(err, db){
  if (err) throw err;
  else{
    console.log("connected to mongoDB");
    DB_SERVER = db;
  }
});