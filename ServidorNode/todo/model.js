const mongoose = require('mongoose');
const Schema = mongoose.Schema;let Todo = new Schema({
    cep: {
        type: String
    },
    city: {
        type: String
    },
});module.exports = mongoose.model('Todo', Todo);
