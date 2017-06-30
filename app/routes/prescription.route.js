const express = require('express');
const prescription = require('../controller/prescription.controller');
const router = express.Router();


router.route('/')
    .post(prescription.insertPrescription)

	.get(prescription.findPrescription);

module.exports = router;



