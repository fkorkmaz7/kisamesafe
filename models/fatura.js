const mongoose = require("mongoose");

const FaturaSchema = new mongoose.Schema({
    alici: { type: mongoose.Schema.Types.ObjectId, ref: "Alici", required: true },  // Alici modeline referans
    araba: { type: mongoose.Schema.Types.ObjectId, ref: "Araba", required: true },  // Araba modeline referans
    fiyat: { type: Number, required: true },  // Satış fiyatı
    tarih: { type: Date, default: Date.now },  // Fatura tarihi
});

const Fatura = mongoose.model("Fatura", FaturaSchema);
module.exports = Fatura;