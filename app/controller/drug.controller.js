const Drug = require('../models/drug.model');

function insertDrug(req, res){
    const drug = new Drug({
        userName: req.body.userName,
        password: req.body.password,
        userRole : req.body.userRole
    });

    drug.save()
        .then(savedDrug => res.json(savedDrug))
        .catch(e => next(e));
}

function findDrugs(req, res){
    Drug.find().exec().then(drugs => {
        res.json(drugs);
    }).catch(err => {
        console.error(err);
        res.sendStatus(500);
    });
}

module.exports = {insertUser, findUser}