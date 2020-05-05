var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017';
var dbname = 'my_first_data'
let db


MongoClient.connect(url, { useNewUrlParser: true}, (err, 
    client) => {
        if(err) return console.log(err)
        db = client.db(dbname)
        console.log(`connected MongoDB: ${url}`)
        console.log(`Database: ${dbname}`)
})