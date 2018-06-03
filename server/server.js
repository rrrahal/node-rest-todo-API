var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completeAt: {
		type: Number
	}
});

/* 
var newTodo = new Todo({
	text: 'Cook dinner'
});
 */

var newTodo = new Todo({
	text: 'Take a shower',
	completed: true,
	completeAt: 20
});

newTodo.save().then(
	(doc) => {
		console.log('Saved todo:', doc);
	},
	(err) => {
		console.log('Unable to save todo');
	}
);
