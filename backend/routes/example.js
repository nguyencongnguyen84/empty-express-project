const express = require('express');

const router = express.Router();


const exampleCtrl = require('../controllers/example')


router.get('/:id',exampleCtrl.getExample);



module.exports = router;