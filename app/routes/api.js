const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const presRoute = require('./prescription.route');
const itemRoute = require('./item.route');
<<<<<<< HEAD
const stockRoute=require('./stock.route');
const uploadRoute=require('./fileupload.route');

=======
const stockRoute = require('./stock.route');
const supplierRoute = require('./supplier.route');
const drugRoute = require('./drug.route');
>>>>>>> 9aba8d435f9419cd52faa6c99c4c9e77e1783ce1
//your routers
router.use('/authenticate', authRoute);
router.use('/users', userRoute);
router.use('/prescription', presRoute);
router.use('/item', itemRoute);
router.use('/drugs', drugRoute);
router.use('/stock',stockRoute);
<<<<<<< HEAD
router.use('/upload',uploadRoute);
=======
router.use('/supplier', supplierRoute);
>>>>>>> 9aba8d435f9419cd52faa6c99c4c9e77e1783ce1

module.exports = router;

