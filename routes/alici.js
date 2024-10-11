const express = require('express');
const Alici = require('../models/alici');
const router = express.Router();

router.route('/getir').get(async (req, res, next) => {
    const alicilar = await Alici.find();
    return res.status(200).send(alicilar);
})

router.route('/ekle').post(async (req,res,next) => {
    const yeni_alici = await Alici.create(req.body);
    res.send(yeni_alici);
});

router.route('/:id').delete(async (req, res, next) => {
    const { id } = req.params;
    const alici = await Alici.findByIdAndDelete(id);
    return res.status(200).send(alici);
})

router.route('/:id').put(async (req, res, next) => {
    const { id } = req.params;
    const { ad_soyad, butce, parola, tel_no} = req.body
    const alici = await Alici.findByIdAndUpdate(id, {
        ad_soyad,
        butce,
        parola,
        tel_no
    }, { new: true });
    return res.status(200).send(alici);
});

module.exports = router;