const mongoose = require("mongoose");
const ArabaSchema = new mongoose.Schema({
    plaka:{type:String},
    marka:{type:String},
    yil:{type:Number},
    fiyat:{type:Number},
    kilometre:{type:Number}
});
const Araba = mongoose.model("Araba",ArabaSchema);
module.exports = Araba;