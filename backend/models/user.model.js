const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketUser = new Schema({
 
    userName:
    {
        type: String,
        required : true
    },

    userDept:
    {
        type: String,
        required : true
    }
})

const User = mongoose.model('User', ticketUser);

module.exports = User;