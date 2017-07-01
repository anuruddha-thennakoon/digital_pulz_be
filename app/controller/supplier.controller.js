const Supplier = require('../models/supplier.model');

function insertSupplier(req, res) {
    const supplier = new Supplier({
        companyName: req.body.companyName,
        description: req.body.description,
        address: req.body.address,
        contactPerson: req.body.contactPerson,
        contactNumber: req.body.contactNumber
    });
    supplier.save()
        .then(savedPrescription => res.json(savedPrescription))
        .catch(e => next(e));
}

function findSupplier(req, res) {
    Supplier.find().exec().then(suppliers => {
        res.json(suppliers);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}

module.exports = { insertSupplier, findSupplier }