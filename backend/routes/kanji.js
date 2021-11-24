const express = require('express');

const router = express.Router();


const kanjiCtrl = require('../controllers/kanji')

/*router.post('/',kanjiCtrl.addKanji);
router.delete('/:kanji',kanjiCtrl.delKanji);
router.put('/:kanji',kanjiCtrl.editKanji);*/
router.get('/:kanji',kanjiCtrl.getKanji);
router.get('/',kanjiCtrl.getAll);
/*router.get('/group/:group',kanjiCtrl.getGroupKanji);
router.get('/group',kanjiCtrl.getAllGroup);*/


module.exports = router;