const express = require('express');
const router = express.Router();
const arabaController = require('../controllers/araba');

router.route('/get').get(arabaController.getArabalar);
router.route('/create').post(arabaController.createAraba);
router.route('/:del').delete(arabaController.deleteAraba);
router.route('/:update').put(arabaController.updateAraba);

module.exports = router;