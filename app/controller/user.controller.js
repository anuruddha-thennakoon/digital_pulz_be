const User = require('../models/user/user.model');

function insert(req, res){
    const user = new User({
        userName: req.body.userName,
        password: req.body.password
    });

    user.save()
        .then(savedUser => res.json(savedUser))
        .catch(e => next(e));
}

function list(req, res){
    res.send('get Val');
}

module.exports = {insert, list}
