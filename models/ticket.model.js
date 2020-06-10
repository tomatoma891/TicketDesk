const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticket = new Schema(
    {
        userId:
        {
            type: Number,
            trim: true,
            required: true
        },
        dateCreated:
        {
            type: Date,
            default:Date.now(),
            required: true
        },

        priority:
        {
            type: String,
            required: true
        },

        issueDesc:
        {
            type: String,
            required: true
        },

        status:
        {
            type: String,
            required: true
        },

        userAssigned:
        {
            type: String
        },
    }, {
    timestamps: true,
    }
);

const Ticket = mongoose.model('Ticket', ticket);

module.exports = Ticket;