const Araba = require('../models/araba');

// Fetch all Arabalar (cars)
const getArabalar = async (req, res, next) => {
    try {
        const arabalar = await Araba.find();
        return res.status(200).json(arabalar);
    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
};

// Fetch a single Araba by ID
const getByIdAraba = async (req, res, next) => {
    try {
        const { id } = req.params;
        const araba = await Araba.findById(id);
        if (!araba) {
            return res.status(404).json({ message: 'Araba not found' });
        }
        return res.status(200).json(araba);
    } catch (error) {
        next(error);
    }
};

// Create a new Araba
const createAraba = async (req, res, next) => {
    try {
        const yeni_araba = await Araba.create(req.body);
        return res.status(201).json(yeni_araba); // 201 status for resource creation
    } catch (error) {
        next(error);
    }
};

// Update an existing Araba by ID
const updateAraba = async (req, res, next) => {
    try {
        const { id } = req.params;
        const araba = await Araba.findByIdAndUpdate(id, req.body, { new: true });
        if (!araba) {
            return res.status(404).json({ message: 'Araba not found' });
        }
        return res.status(200).json(araba);
    } catch (error) {
        next(error);
    }
};

// Delete an Araba by ID
const deleteAraba = async (req, res, next) => {
    try {
        const { id } = req.params;
        const araba = await Araba.findByIdAndDelete(id);
        if (!araba) {
            return res.status(404).json({ message: 'Araba not found' });
        }
        return res.status(200).json({ message: 'Araba deleted' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getArabalar,
    getByIdAraba,
    createAraba,
    updateAraba,
    deleteAraba
};
