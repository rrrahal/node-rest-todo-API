//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');
	/* 
	db.collection('Todos').insertOne({
		text: 'Something to do',
		completed: false
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert Todo', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
    }); */
	/* 
	db.collection('Users').insertOne({
		name: 'Rafael',
		age: 21,
		location: 'São Paulo'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert User', err);
		}

		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	}); */

	db.close();
});
