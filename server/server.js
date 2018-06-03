var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true //Remove spaces to check if the text is valid
	},
	completed: {
		type: Boolean,
		default: false
	},
	completeAt: {
		type: Number,
		default: null
	}
});

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

/* 
var newTodo = new Todo({
	text: 'Cook dinner'
});
 */

/* var newTodo = new Todo({
	text: '   Edit this video     '
});

newTodo.save().then(
	(doc) => {
		console.log('Saved todo:', doc);
	},
	(err) => {
		console.log('Unable to save todo', err);
	}
);
 */

var newUser = new User({
	email: 'myemail'
});

newUser.save().then(
	(doc) => {
		console.log('Saved User:', doc);
	},
	(e) => {
		console.log('Unable to save user', e);
	}
);
