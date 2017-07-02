const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const presRoute = require('./prescription.route');
const itemRoute = require('./item.route');
const stockRoute = require('./stock.route');
const supplierRoute = require('./supplier.route');

 const orderRoute=require('./order.route');


 const drugRoute = require('./drug.route');

//your routers
router.use('/authenticate', authRoute);
router.use('/users', userRoute);
router.use('/prescription', presRoute);
router.use('/item', itemRoute);
router.use('/drugs', drugRoute);
router.use('/stock',stockRoute);
router.use('/supplier', supplierRoute);
router.use('/order',orderRoute);

module.exports = router;

