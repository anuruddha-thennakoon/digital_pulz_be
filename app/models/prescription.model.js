'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newPrescription = new Schema({
    patientName: {
        type: String
    },
    doctorName: {
        type: String
    },
    prescribedDate: {
        type: String,
        default: Date.now
    },
    status: {
        type: String,
        default: "false"
    },
    items:[{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }]
});

const Prescription = mongoose.model('prescription', newPrescription);

module.exports = Prescription;
