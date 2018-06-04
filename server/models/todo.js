var mongoose = require('mongoose');

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

module.exports = {
	Todo
};
