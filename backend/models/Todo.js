const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  city: {
    type: String,
    required: 'Cidade Requirida!'
  },
  cep: {
    type: String,
    required: 'Cidade Requirida!'
  },
});

mongoose.model('teste', todoSchema);
