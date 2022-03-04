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

		db.collection('users').insertOne(
			{
				_id: id,
				name: 'vinny',
				age: 27,
			},
			(error, result) => {
				if (error) {
					return console.log('unable to insert the user');
				}
				console.log(result.ops);
			}
		);

		// db.collection('users').insertMany(
		// 	[
		// 		{
		// 			name: 'reddy',
		// 			age: '25',
		// 		},
		// 		{
		// 			name: 'anusha',
		// 			age: '25',
		// 		},
		// 	],
		// 	(error, result) => {
		// 		if (error) {
		// 			return console.log('error in the mutiple insertion');
		// 		}

		// 		console.log(result.ops);
		// 	}
		// );

		db.collection('tasks').insertMany(
			[
				{
					description: 'Clean the house',
					completed: 'true',
				},
				{
					description: 'Renew the house',
					completed: false,
				},
				{
					description: 'Pot Plants',
					completed: false,
				},
			],
			(error, result) => {
				if (error) {
					return console.log('unable to update the task');
				}
			}
		);
	}
);
