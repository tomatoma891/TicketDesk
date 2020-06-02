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

const ticket = new Schema(
    {
        id:
        {
            type: Number,
            trim: true,
            required : true
        },
        timeCreated:
        {
            type: Date,
            required: true
        },

        priority:
        {
            type: String,
            required : true
        },

        issueDesc:
        {
            type: String,
            required : true
        },

        status:
        {
            type: String,
            required : true
        },

        userAssigned:
        {
            type: String,
            required : true
        }
    
    }
)