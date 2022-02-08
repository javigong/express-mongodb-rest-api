const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnimalSchema = new Schema({
    type:{type:String, required:true, maxLength: 100},
    numberOfLegs:{type:Number, required:true}
});

const Animal = mongoose.model("Animal", AnimalSchema);

module.exports = Animal;