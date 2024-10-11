const express = require('express');
const Alici = require('../models/alici');
const { signIn,signUp } = require('../services/auth');
const router = express.Router();


router.route('/').get(async (req, res, next) => {
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

router.route('/:id').put(signUp);

module.exports = router;