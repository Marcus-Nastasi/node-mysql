const express = require('express');
const router = express.Router();
// const { connection } = require('../models/db');
const cruds = require('../controllers/cruds');

router.get('/read', cruds.read);

router.get('/read-single/:id', cruds.readOne);

router.post('/insert', cruds.insert);

router.post('/update', cruds.update);

router.delete('/delete', cruds.delete);

module.exports = router;


