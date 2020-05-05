var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost/my_first_data';
var dbname = 'my_first_data'

let db


MongoClient.connect(url, function(err, client){
    db = client.db(dbname)

    var cursor = db.collection('characters').find()
    cursor.each(function(err, doc){
        console.log(doc);
        
        });

});