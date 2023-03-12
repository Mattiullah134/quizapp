const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultSchema = new Schema({
    userId: {
        type: String,
    },
    check: {
        type: Array,
        default: []
    },
    attempts: {
        type: Number,
        default: 0,
    },
    points: {
        type: Number,
        default: 0
    },
    achieved: {
        type: String,
        default: '',
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});
module.exports = mongoose.model('Result', resultSchema);
