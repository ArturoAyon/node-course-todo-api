//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' , { useNewUrlParser: true }, (err, client) => {

    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server')
    
    const db = client.db('TodoApp')
    
    /*db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5d08f08e5645034b170a5f85')
    }, {
        $set: {
            complete: true
        }
        
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/

db.collection('Users').findOneAndUpdate({_id: new ObjectID('5d08f26b5645034b170a5fc4')
    }, {
        $set: {
            name: 'Arturo'
        },
        $inc:{
            age:1
        }
    
    }, {
        returnOriginal: false
    }).then((result) => {
    console.log(result);
    });

    //client.close();
    });