const express = require('express');
const router = express.Router();
const faturaController = require('../controllers/fatura');

router.route('/get').get(faturaController.getFaturalar);
router.route('/create').post(faturaController.createFatura);
router.route('/:del').delete(faturaController.deleteFatura);
router.route('/:update').put(faturaController.updateFatura);

module.exports = router