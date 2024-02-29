const express = require('express');
const router = express.Router();
// const { connection } = require('../models/db');
const cruds = require('../controllers/cruds');

router.get('/read', cruds.read);

router.get('/read-single', cruds.readOne);

router.post('/insert', cruds.insert);

module.exports = router;


