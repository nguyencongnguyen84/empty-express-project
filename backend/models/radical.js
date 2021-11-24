const mongoose = require('mongoose');

const radicalSchema = mongoose.Schema({
    radical:{ type:String, required:true, unique:true },
    meaning:{ type: String, required:true }
});

module.exports = mongoose.model('Radical',radicalSchema);

