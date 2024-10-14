const mongoose = require("mongoose");

const ArabaSchema = new mongoose.Schema({
    plaka: { type: String, required: true, unique: true },
    marka: { type: String, required: true },
    yil: { type: Number, required: true },
    fiyat: { type: Number, required: true },
    kilometre: { type: Number, required: true },
    satildi: { type: Boolean, default: false },  // Arabanın satıldığını takip etmek için
});

const Araba = mongoose.model("Araba",ArabaSchema);
module.exports = Araba;