const Drug = require('../models/drug.model');

function insertDrug(req, res) {
    const drug = new Drug({

        drugCategory: req.body.drugCategory,
        drugName: req.body.drugName,
        drugType: req.body.drugType,
        remarks: req.body.remarks,
        price: req.body.price,
        dangerLevel: req.body.dangerLevel,
        reorderLevel: req.body.reorderLevel,
        dosage: req.body.dosage,
        frequency: req.body.frequency
    });

    drug.save()
        .then(savedDrug => res.json(savedDrug))
        .catch(e => next(e));
}

function findDrugs(req, res) {
    Drug.find().exec().then(drugs => {
        res.json(drugs);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}

module.exports = { insertUser, findUser }