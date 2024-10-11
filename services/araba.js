const Araba = require("../models/araba")
const delAraba = async (id) => {
        const delAraba = await Araba.findByIdAndDelete(id);
        if(!delAraba) {
            throw new Error('Araba bulunamadi')
        }
        return delAraba;
};

const updateArabaFiyat = async (id, fiyat) => {
    const updateAraba = await Araba.findByIdAndUpdate(
        id,
        {fiyat:fiyat},//???
        {new:true}
    )
    if (!updateAraba) {
        throw new Error("Araba bulunamadı.");
    }
    return updateAraba;
}

module.exports = {delAraba,updateArabaFiyat};