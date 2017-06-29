const express = require('express');
const user = require('../controller/user.controller');

const router = express.Router();



router.route('/')
    .post(user.insert)

    .get(user.list);
	
module.exports = router;


