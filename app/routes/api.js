const express = require('express');
const router = express.Router();

const authRoute = require('./auth.route');
const userRoute = require('./user.route');

//your routers
//router.use('/authenticate', authRoute);
router.use('/users', userRoute);

module.exports = router;

