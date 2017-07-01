'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newPrescription = new Schema({
    patientName: {
        type: String
    },
    prescribedDate: {
        type: Date
    },
    status: {
        type: Boolean
    },
    items:[{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

const Prescription = mongoose.model('prescription', newPrescription);

module.exports = Prescription;
