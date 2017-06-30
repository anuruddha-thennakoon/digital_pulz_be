
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newStock = new Schema({
    drugName: {
        type: String,
       
    },
    unitType: {
        type: String
    },
    drugCategory:{
        type: String
    },
    drugPrice: {
        type: Number
    },
    quantity: {
        type: Number
    }
});

const Stock = mongoose.model('stock', newStock);

module.exports = Stock;