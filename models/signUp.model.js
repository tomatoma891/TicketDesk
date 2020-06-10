const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

// Create Schema
const signUp = new Schema({
  username: {
    type: String,
    unique: false,
    required: false
  },
  password: {
    type: String,
    unique: false,
    required: false
  }
});

// Define schema methods
signUp.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define hooks for pre-saving
signUp.pre('save', function (next) {
	if (!this.password) {
		console.log('models/signUp.model.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/signUp.model.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})


const signUpUser = mongoose.model('signUpUser', signUp);
module.exports = signUpUser;