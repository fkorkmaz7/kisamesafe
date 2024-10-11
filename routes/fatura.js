const express = require('express');
const Fatura = require('../models/fatura');
const router = express.Router();

router.route('/getir').get(async (req, res, next) => {
    const faturalar = await Fatura.find();
    return res.status(200).send(faturalar);
})

router.route('/ekle').post(async (req,res,next) => {
    const yeni_fatura = await Fatura.create(req.body);
    res.send(yeni_fatura);
});

router.route('/:id').delete(async (req, res, next) => {
    const { id } = req.params;
    const fatura = await Fatura.findByIdAndDelete(id);
    return res.status(200).send(fatura);
})

router.route('/:id').put(async (req, res, next) => {
    const { id } = req.params;
    const { alici, fiyat, urun, tarih} = req.body
    const fatura = await Fatura.findByIdAndUpdate(id, {
        alici,
        fiyat,
        urun,
        tarih,
    }, { new: true });
    return res.status(200).send(fatura);
});

module.exports = router;