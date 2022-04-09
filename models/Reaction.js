const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true, 
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Username is required'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAt => formatDate(createdAt)
    }
})

// getter method to format the timestamp on query
function formatDate(createdAt) {
    return createdAt.toDateString();
};

module.exports = reactionSchema;