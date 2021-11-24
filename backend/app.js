const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://KanjiLearner:KanjiLearner00@cluster0.hlmzy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const kanjiRoutes = require('./routes/kanji');
const quizzRoutes = require('./routes/quizz');
const usersRoutes = require('./routes/users');
const radicalRoutes = require('./routes/radical');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use("/api/kanji", kanjiRoutes);
app.use("/api/quizz", quizzRoutes);
app.use("/api/auth", usersRoutes);
app.use("/api/radical", radicalRoutes);



module.exports = app;