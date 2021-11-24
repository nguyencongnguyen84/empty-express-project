const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = (req, res, next) =>{
    console.log(req.body)
    console.log(req.body.pseudo,req.body.password)
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            pseudo: req.body.pseudo,
            password: hash  
        });
        user.save()
        .then(() => res.status(201).json({ message : "User created"}))
        .catch(error => res.status(400).json({ error }))
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) =>{
    User.findOne({pseudo: req.body.pseudo})
    .then(user =>{
        if(!user){
            return res.status(401).json({ message: "User Not Found"});
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if(valid){
                return res.status(200).json({ 
                    userId: user._id,
                    token: jwt.sign(
                        { userId: user.id },
                        'RANDOM_SECRET_TOKEN',
                        { expiresIn : '24h' }
                    )
                });  
            }
            return res.status(401).json({ message: "Invalid password"});
        })
        .catch(error => res.status(500).json({ error }))
    })
    .catch(error => res.status(500).json({ error }));
};

exports.check = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_SECRET_TOKEN');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            res.status(200).json({
                connected:false
              });
        } else {
            res.status(200).json({
                connected:true
              });
        }
      } catch {
        res.status(200).json({
          connected:false
        });
      }
};
