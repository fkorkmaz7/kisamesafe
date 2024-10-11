const mongoose = require("mongoose")
const AliciSchema = new mongoose.Schema({
    ad_soyad : {type: String},
    butce : {type: Number},
    parola : {type: Number},
    tel_no: {type: Number},
})
const Alici = mongoose.model("Alici", AliciSchema);
module.exports= Alici;