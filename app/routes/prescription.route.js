const express = require('express');
const prescription = require('../controller/prescription.controller');
const router = express.Router();


router.route('/')
    .post(prescription.insertPrescription)

	.get(prescription.findPrescription);

router.route('/today')

    .get(prescription.findTodayPrescription);

router.route('/lowstock')

module.exports = router;



