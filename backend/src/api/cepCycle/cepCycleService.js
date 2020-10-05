const CepCycle = require('./cepCycle')
const errorHandler = require('../common/errorHandler')

CepCycle.methods(['get', 'post', 'put', 'delete'])
CepCycle.updateOptions({new: true, runValidators: true})
CepCycle.after('post', errorHandler).after('put', errorHandler)

CepCycle.route('count', (req, res, next) => {
    CepCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

/* CepCycle.route('summary', (req, res, next) => {
    CepCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, {
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || { credit: 0, debt: 0 })
        }
    })
})
 */

module.exports = CepCycle