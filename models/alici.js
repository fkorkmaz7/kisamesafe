const mongoose = require("mongoose");

const AliciSchema = new mongoose.Schema({
    ad_soyad: { type: String, required: true },
    butce: { type: Number, required: true },
    parola: { type: String, required: true },
    tel_no: { type: Number, required: true, unique: true },
});
const Alici = mongoose.model("Alici", AliciSchema);
module.exports = Alici;