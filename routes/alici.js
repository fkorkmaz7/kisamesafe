const express = require('express');
const Alici = require('../models/alici');
const { signIn,signUp } = require('../services/auth');
const {login} = require('../controllers/auth')
const router = express.Router();


router.route('/').get(async (req, res, next) => {
    const alicilar = await Alici.find();
    return res.status(200).send(alicilar);
})

router.route('/').post(async (req,res,next) => {
    const yeni_alici = await Alici.create(req.body);
    res.send(yeni_alici);
});

router.route('/').delete(async (req, res, next) => {
    const { id } = req.params;
    const alici = await Alici.findByIdAndDelete(id);
    return res.status(200).send(alici);
})

router.route('/logIn').post(login);

module.exports = router;