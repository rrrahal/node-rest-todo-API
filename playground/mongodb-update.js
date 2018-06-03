const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');

	/* 	db
		.collection('Todos')
		.findOneAndUpdate(
			{
				_id: new ObjectID('5b1452151275b808a0722102')
			},
			{
				$set: {
					completed: true
				}
			},
			{
				returnOriginal: false
			}
		)
		.then((result) => {
			console.log(result);
        }); */

	db
		.collection('Users')
		.findOneAndUpdate(
			{
				_id: new ObjectID('5b14207f5d0cb451598d9c30')
			},
			{
				$set: {
					name: 'Rafael'
				},
				$inc: {
					age: 1
				}
			},
			{
				returnOriginal: false
			}
		)
		.then((result) => {
			console.log(result);
		});

	//db.close();
});
