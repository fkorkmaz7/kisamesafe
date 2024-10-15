const Araba = require('../models/araba');

const getArabalar = async (req, res, next) => {
    const arabalar = await Araba.find();
    return res.status(200).send(arabalar);
};
const createAraba = async (req, res, next) => {
    const yeni_araba = await Araba.create(req.body);
    return res.send(yeni_araba);
};
const deleteAraba = async (req, res, next) => {
    const { id } = req.params;
    const araba = await Araba.findByIdAndDelete(id);
    return res.status(200).send(araba);
};

const updateAraba = async (req, res, next) => {
    const { id } = req.params;
    const { marka, plaka, yil, fiyat, kilometre } = req.body;
    const araba = await Araba.findByIdAndUpdate(id, {
        marka,
        plaka,
        yil,
        fiyat,
        kilometre
    }, { new: true });
    return res.status(200).send(araba);
};

module.exports = {
    getArabalar,
    createAraba,
    deleteAraba,
    updateAraba,
};