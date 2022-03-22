const { ObjectID, MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log('id', id);

MongoClient.connect(
	connectionURL,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(error, client) => {
		if (error) {
			return console.log('Unable to connect to database');
		}
		const db = client.db(databaseName);

		// db.collection('users')
		// 	.deleteMany({ age: 27 })
		// 	.then((result) => {
		// 		console.log('result', result);
		// 	})
		// 	.catch((err) => {
		// 		console.log('error', err);
		// 	});
		db.collection('users').insertOne({
			name : 'vinay',
			email: 'vinay@gmail.com',
			password: 'vinay1234'

		})
	}
);


