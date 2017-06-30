const express = require('express');
const item = require('../controller/item.controller');
const router = express.Router();


router.route('/')
    .post(item.insertItem)

	.get(item.findItem);

module.exports = router;



