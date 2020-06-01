const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config();

module.exports = mongoose;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ishanchadha01:<password>@todo-app-pzqrw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});