const Radical = require('../models/Radical');


exports.getAll = (req,res,next) => {
  Radical.find().then(
    (r) => {
      res.status(200).json(r);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
}

exports.getRadical = (req,res,next) => {
  Radical.findOne({
    radical: req.params.radical
  }).then(
    (r) => {
      res.status(200).json(r);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
}

exports.editRadical = (req, res, next) => {
    console.log("edition")
    Radical.findOne({
        radical: req.body.old
      }).then(
        (r) => {
            r.radical  = req.body.new
            r.meaning =  req.body.meaning
            r.save()
            res.status(201).json({
                message: 'Radical modifié avec succes!'
              });

        }
      ).catch(
        (error) => {
          res.status(404).json({
            error: error
          });
        }
      );
    
}


exports.delRadical = (req, res, next) => {
    Radical.deleteOne({radical: req.body.radical}).then(
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


exports.addRadical = (req, res, next) => {
    console.log("test")
    const newRadical = new Radical({
        
        radical: req.body.radical,
        meaning: req.body.meaning

      });
      newRadical.save().then(
        () => {
          res.status(201).json({
            message: 'Radical saved successfully!'
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