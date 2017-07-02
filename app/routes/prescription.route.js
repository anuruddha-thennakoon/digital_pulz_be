const express = require('express');
const prescription = require('../controller/prescription.controller');
const router = express.Router();


router.route('/')
    .post(prescription.insertPrescription)

	.get(prescription.findPrescription);

router.route('/today')

    .get(prescription.findTodayPrescription);


router.route('/previous')

    .get(prescription.findPreviousPrescription);
    
router.route('/pending')

    .get(prescription.findPendingPrescription);

     
router.route('/dispensed')

    .get(prescription.findDispensedPrescriptionItems);
    
   


module.exports = router;



