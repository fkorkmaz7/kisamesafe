const Fatura = require('../models/fatura');

const getFaturalar = async (req, res, next) => {
    const faturalar = await Fatura.find();
    return res.status(200).send(faturalar);
};

const createFatura = async (req, res, next) => {
    const yeni_fatura = await Fatura.create(req.body);
    return res.status(201).send(yeni_fatura);
};
const deleteFatura = async (req, res, next) => {
    const { id } = req.params;
    const fatura = await Fatura.findByIdAndDelete(id);
    return res.status(200).send(fatura);
};


const updateFatura = async (req, res , next) => {
    const { id } = req.params;
    const { alici, fiyat, urun, tarih } = req.body;
    const fatura = await Fatura.findByIdAndUpdate(id, {
        alici,
        fiyat,
        urun,
        tarih,
    }, { new: true });
    return res.status(200).send(fatura);
};
module.exports = {
    getFaturalar,
    createFatura,
    deleteFatura,
    updateFatura,
};
