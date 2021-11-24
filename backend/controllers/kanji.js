const Kanji = require('../models/kanji');


exports.getAll = (req,res,next) => {
  Kanji.find().then(
    (kanji) => {
      res.status(200).json(kanji);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

exports.getKanji = (req,res,next) => {
  Kanji.findOne({
    kanji: req.params.kanji
  }).then(
    (kanji) => {
      res.status(200).json(kanji);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
}

exports.putKanji = (req, res, next) => {
    const newKanji = new Kanji({

        kanji: req.params.kanji,
        lvl: req.body.lvl,
        meaning: req.body.meaning,
        voc: req.body.voc,
        groups: req.body.groups
        
      });
      Kanji.updateOne({kanji: req.params.kanji}, newKanji).then(
        () => {
          res.status(201).json({
            message: 'Kanji modifié avec succes!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}


exports.deleteKanji = (req, res, next) => {
    Kanji.deleteOne({kanji: req.params.kanji}).then(
        () => {
          res.status(200).json({
            message: 'Deleted!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}


exports.createKanji = (req, res, next) => {
    const newKanji = new Kanji({
        
        kanji: req.params.kanji,
        lvl: req.body.lvl,
        meaning: req.body.meaning,
        voc: req.body.voc,
        groups: req.body.groups

      });
      newKanji.save().then(
        () => {
          res.status(201).json({
            message: 'Kanji saved successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
}