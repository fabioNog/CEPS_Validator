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
   
    start_day: { type: Number, min: 1, max: 31, required: true },
    start_month: { type: Number, min: 1, max: 12, required: true },
    start_year: { type: Number, min: 1970, max: 2100, required: true },
    end_day: { type: Number, min: 1, max: 31, required: true },
    end_month: { type: Number, min: 1, max: 12, required: true },
    end_year: { type: Number, min: 1970, max: 2100, required: true },    
    // // unlimited : { type: Boolean, required: true },
    // // justNew : { type: Boolean, required: true },
    services : [ServiceSchema], //Serviços que se pode usar ‘Unhas’, ‘Depilação’
    code : { type: String, required: true }, //Código que deve ser utilizado
    users : [UsedBySchema],
    // // campaign : { type: Boolean, required: true }, //se for Dia dos pais então true
    locates : [LocationSchema], //Em quais cidades pode ser utilizado, ‘São Paulo’, ‘Rio de Janeiro’
});


// const creditSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     value: { type: Number, min: 0, required: true }
// })

// const debtSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
//     status: { type: String, required: false, uppercase: true,
//         enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
// })

// const billingCycleSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     month: { type: Number, min: 1, max: 12, required: true },
//     year: { type: Number, min: 1970, max: 2100, required: true },
//     credits: [creditSchema],
//     debts: [debtSchema]
// })

module.exports = restful.model('cep', CepSchema)