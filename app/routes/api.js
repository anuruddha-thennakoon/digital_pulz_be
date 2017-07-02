const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const presRoute = require('./prescription.route');
const itemRoute = require('./item.route');
const uploadRoute=require('./fileupload.route');
const stockRoute = require('./stock.route');
const supplierRoute = require('./supplier.route');
const drugRoute = require('./drug.route');
const batchRoute = require('./batch.route');
const orderRoute = require('./order.route');

//your routers
router.use('/authenticate', authRoute);
router.use('/users', userRoute);
router.use('/prescription', presRoute);
router.use('/item', itemRoute);
router.use('/drugs', drugRoute);
router.use('/stock',stockRoute);
router.use('/upload',uploadRoute);
router.use('/supplier', supplierRoute);
router.use('/batch', batchRoute);
router.use('/order', orderRoute);
module.exports = router;

