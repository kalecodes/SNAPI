const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: 'Thought Text is Required', 
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        },
        username: {
            type: String,
            required: 'Username is Required'
        },
        reactions: [ reactionSchema ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// getter method to format the timestamp on query
function formatDate(createdAt) {

};

// virtual that retrieves the length of the thought's reactions array field on query
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;