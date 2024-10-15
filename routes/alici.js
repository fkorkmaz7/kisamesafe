const express = require('express');
const Alici = require('../models/alici');
const { signIn,signUp } = require('../services/auth');
const {login} = require('../controllers/auth')
const aliciController = require(`../controllers/alici`)
const router = express.Router();


router.route(`/`).get(aliciController.getAlicilar)
router.route(`/`).post(aliciController.createAlici)
router.route(`/:`).delete(aliciController.deleteAlici)
router.route(`/`).get(aliciController.getAlicilar)
router.route('/logIn').post(login);

module.exports = router;