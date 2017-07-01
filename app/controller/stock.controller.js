const Stock = require('../models/stock.model');


function insertStock(req, res){
    const stock = new Stock({
        drugName: req.body.drugName,
        drugType: req.body.drugType,
        drugCategory : req.body.drugCategory,
        drugPrice:req.body.drugPrice,
        quantity:req.body.quantity,
        remarks:req.body.remarks,
        dangerLevel:req.body.dangerLevel,
        reorderLevel:req.body.reorderLevel,
        dosage:req.body.dosage,
        frequency:req.body.frequency

    });

    stock.save()
        .then(savedStock => res.json(savedStock))
        .catch(e => next(e));
}

    function findStock(req, res) {
        Stock.find().exec().then(stock => {
            res.json(stock);
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
    }


     function findDanger(req, res) {
        Stock.find({'quantity':{ $lt: 10 }}).exec().then(stock => {
            res.json(stock);
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
    }

        function findAvailability(req, res) {
        Stock.find({'drugName':"pp" }).exec().then(stock => {
            res.json(stock);    
        }).catch(err => {
            console.error(err);
            res.sendStatus(500);
        });
    }


    module.exports = { insertStock, findStock, findDanger }
