const mongoose = require("mongoose")
const FaturaSchema = new mongoose.Schema({
    alici : {type: String},
    fiyat : {type: Number},
    urun : {type: String},
    tarih: {type: Number},
})
const Fatura = mongoose.model("Fatura", FaturaSchema);
module.exports= Fatura;