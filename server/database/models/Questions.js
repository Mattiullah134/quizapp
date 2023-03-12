const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    questions: {
        type: Array,
        default: []
    },
    type: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});
module.exports = mongoose.model('Question', questionSchema);