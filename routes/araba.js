const express = require('express');
const Araba = require('../models/araba');
const router = express.Router();


router.route('/').get(async (req, res, next) => {
    const arabalar = await Araba.find();
    return res.status(200).send(arabalar);
})

router.route('/').post(async (req,res,next) => {
    const yeni_araba = await Araba.create(req.body);
    res.send(yeni_araba);
});

router.route('/:id').delete(async (req, res, next) => {
    const { id } = req.params;
    const araba = await Araba.findByIdAndDelete(id);
    return res.status(200).send(araba);
})

router.route('/:id').put(async (req, res, next) => {
    const { id } = req.params;
    const { marka, plaka, yil, fiyat, kilometre } = req.body
    const araba = await Araba.findByIdAndUpdate(id, {
        marka,
        plaka,
        yil,
        fiyat,
        kilometre
    }, { new: true });
    return res.status(200).send(araba);
});

module.exports = router;