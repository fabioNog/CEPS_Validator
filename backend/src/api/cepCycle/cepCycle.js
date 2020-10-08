const restful = require('node-restful')
const mongoose = restful.mongoose



const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
})

const UsedBySchema = new mongoose.Schema({
    name: { type: String, required: true },
})

const LocationSchema = new mongoose.Schema({
    name: { type: String, required: true },
})

const CepSchema = new mongoose.Schema({

    city : { type: String, required: true },
    cep  : { type: String, required: true },
});



module.exports = restful.model('cep', CepSchema)