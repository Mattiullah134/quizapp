const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/p2plmsquiz', () => {
    console.log('connection to the mongo db successfully')
});