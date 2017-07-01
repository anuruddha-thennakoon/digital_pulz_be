const express = require('express');
const supplier = require('../controller/supplier.controller');
const router = express.Router();


router.route('/')
    .post(supplier.insertSupplier)

    .get(supplier.findSupplier);
	
module.exports = router;
