const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const presRoute = require('./prescription.route');
const itemRoute = require('./item.route');
const stockRoute=require('./stock.route');
//your routers
router.use('/authenticate', authRoute);
router.use('/users', userRoute);
router.use('/prescription', presRoute);
router.use('/item', itemRoute);
<<<<<<< HEAD
router.use('/drugs', itemRoute);

=======
router.use('/stock',stockRoute);
>>>>>>> 05564271af33361e58f1ab2930726f265e749c35
module.exports = router;

