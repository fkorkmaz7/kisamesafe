const Fatura = require('../models/fatura');

const updateFaturaFiyat = async (id, fiyat) => {
    const fatura = await Fatura.findByIdAndUpdate(
        id,
        {fiyat:fiyat},//???
        {new:true}
    )
    if (!fatura) {
        throw new Error("Fatura bulunamadı.");
    }
    return fatura;
};

module.exports = {updateFaturaFiyat};
