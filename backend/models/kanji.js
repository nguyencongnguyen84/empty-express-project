const mongoose = require('mongoose');

const kanjiSchema = mongoose.Schema({
    kanji:{ type:String, required:true },
    lvl:{ type:Number, required:true },
    meaning:{ type: String, required:true },
    voc:{type:[{String,String}],required:true},
    groups:{type:[String],required : true}
});

module.exports = mongoose.model('Kanji',kanjiSchema);

