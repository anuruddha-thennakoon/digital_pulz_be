const Item = require('../models/item.model');
const PrescriptionModel = require('../models/prescription.model');

//insert item
function insertItem(req, res) {
    const item = new Item({
        prescriptionId: req.body.prescriptionId,
        drugName: req.body.drugName,
        quantity: req.body.quantity,
        dose: req.body.dose,
        period: req.body.period,
        frequency: req.body.frequency
    });
    item.save()
        // .then(ItemDb => {
        //     return PrescriptionModel.findByIdAndUpdate(presId, {
        //         $push: { "items": ItemDb._id }
        //     })
        // })
        // .then(() => {
        //     return PrescriptionModel.findById(presId).populate('items').exec();
        // })
        .then(savedItem => res.json(savedItem))
        .catch(e => next(e));
}

//find item
function findItem(req, res) {
    Item.find().exec().then(item => {
        res.json(item);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}

function removeItem(req, res) {
    Item.remove(req.params.id).then(() => {
        res.sendStatus(200);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}


module.exports = { insertItem, findItem, removeItem }
