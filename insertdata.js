var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/my_first_data';
var dbname = 'my_first_data'
let db

MongoClient.connect(url, function(err, client){
    db = client.db(dbname)
    db.collection('characters').insertOne({
        name: "newName"
    });
});