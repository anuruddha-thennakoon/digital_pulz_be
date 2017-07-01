const express = require('express');
const stock = require('../controller/stock.controller');
const router = express.Router();


router.route('/')
    .post(stock.insertStock)

	.get(stock.findStock)

    .get(stock.findDanger);

module.exports = router;

