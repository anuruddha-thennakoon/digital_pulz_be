const Prescription = require('../models/prescription.model');
const Item = require('../models/item.model');

function insertPrescription(req, res){
    const prescription = new Prescription({
        patientName: req.body.patientName,
        prescribedDate: req.body.prescribedDate,
        status: "not"
    });
    prescription.save()
        .then(savedPrescription => res.json(savedPrescription))
        .catch(e => next(e));
}

function findPrescription(req, res){
    Prescription.find().populate('item').exec().then(prescriptions => {
        res.json(prescriptions);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}

module.exports = {insertPrescription, findPrescription}
