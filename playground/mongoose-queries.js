const { mongoose } = require('./../server/db/mongoose');
const { objectID } = require('mongodb');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5b146db12a619ca1322c1491';

/* 
var id = '5b1571c18419fbfc14b3590d';

if (!objectID.isValid(id)) {
	console.log('ID not valid');
} */

/* 
Todo.find({
	_id: id
}).then((todos) => {
	console.log('todos:', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo:', todo);
});
 */

/*  
Todo.findById(id)
	.then((todo) => {
		if (!todo) {
			return console.log('ID not found.');
		}
		console.log('Todo by ID:', todo);
	})
	.catch((e) => {
		console.log(e);
	});
 */

User.findById(id)
	.then((user) => {
		if (!user) {
			return console.log('ID not found.');
		}
		console.log('User by ID:', user);
	})
	.catch((e) => {
		console.log(e);
	});
