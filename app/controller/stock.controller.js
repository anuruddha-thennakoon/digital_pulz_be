const Stock = require('../models/stock.model');


function insertStock(req, res) {
    const stock = new Stock({
        drugName: req.body.drugName,
        unitType: req.body.unitType,
        drugCategory: req.body.drugCategory,
        drugPrice: req.body.drugPrice,
        quantity: req.body.quantity
    });
    item.save()
        .then(ItemDb => {
            return PrescriptionModel.findByIdAndUpdate(presId, {
                $push: { "items": ItemDb._id }
            })
        })
        .then(() => {
            return PrescriptionModel.findById(presId).populate('items').exec();
        })
        .then(savedItem => res.json(savedItem))
        .catch(e => next(e));
}
    function findStock(req, res) {
        Item.find().exec().then(stock => {
            res.json(stock);
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
    }

    module.exports = { insertStock, findStock }
