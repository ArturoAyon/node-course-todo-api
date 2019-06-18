//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , { useNewUrlParser: true }, (err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')
    
    const db = client.db('TodoApp')
    //db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
      //  console.log(result);
    //});

    //db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
      //  console.log(result);
    //});

    //db.collection('Todos').findOneAndDelete({text: 'Walk the dog'}).then((result) => {
      //  console.log(result);
    //});

    console.log('Find One and Delete');
    db.collection('Users').findOneAndDelete({name: 'Arthur'}).then((result) => {
        console.log(result);
    });

    console.log('Delete One');
    db.collection('Users').deleteOne({name: 'Jon'}).then((result) => {
        console.log(result);
    });

    console.log('Delete Many');
    db.collection('Users').deleteMany({name: 'Arturo'}).then((result) => {
        console.log(result);
    });


    
    //client.close();
});