const Supplier = require('../models/supplier.model');

//insert supplier
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

//find suppliers
function findSupplier(req, res) {
    Supplier.find().exec().then(suppliers => {
        res.json(suppliers);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}

//update supplier
function updateSupplier(req, res) {
    const supplier = new Supplier(req.body);
    supplier.update().then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}

//delete supplier
function deleteSupplier(req, res) {
    Supplier.remove(req.params.id).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}

module.exports = { insertSupplier, findSupplier, updateSupplier, deleteSupplier}