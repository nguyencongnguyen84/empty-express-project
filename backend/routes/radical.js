const express = require('express');

const router = express.Router();


const radicalCtrl = require('../controllers/radical')

router.put('/',radicalCtrl.editRadical);
router.post('/',radicalCtrl.addRadical);
router.delete('/',radicalCtrl.delRadical);
router.get('/:radical',radicalCtrl.getRadical);
router.get('/',radicalCtrl.getAll);


module.exports = router;