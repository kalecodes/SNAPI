const { Schema, Types } = require('mongoose');
const formatDate = require('../utils/formatDate')

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
},
{
    toJSON: {
        getters: true
    },
    id: false
});

module.exports = reactionSchema;