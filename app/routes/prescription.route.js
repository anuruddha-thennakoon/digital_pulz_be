const express = require('express');
const prescription = require('../controller/prescription.controller');
const router = express.Router();


router.route('/')
    .post(prescription.insertPrescription)

	.get(prescription.findPrescription, prescription.findUnprescribedPrescription);

router.route('/status')
	.get(prescription.findUnprescribedPrescription);

module.exports = router;



