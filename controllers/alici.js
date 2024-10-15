const Alici = require('../models/alici');

// Fetch all Alici
const getAlicilar = async (req, res, next) => {
    try {
        const alicilar = await Alici.find();
        return res.status(200).json(alicilar);
    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
};

// Fetch a single Alici by ID
const getByIdAlici = async (req, res, next) => {
    try {
        const { id } = req.params;
        const alici = await Alici.findById(id);
        if (!alici) {
            return res.status(404).json({ message: 'Alici not found' });
        }
        return res.status(200).json(alici);
    } catch (error) {
        next(error);
    }
};

// Create a new Alici
const createAlici = async (req, res, next) => {
    try {
        const yeni_alici = await Alici.create(req.body);
        return res.status(201).json(yeni_alici); // 201 status for resource creation
    } catch (error) {
        next(error);
    }
};

// Update an Alici by ID
const updateAlici = async (req, res, next) => {
    try {
        const { id } = req.params;
        const alici = await Alici.findByIdAndUpdate(id, req.body, { new: true });
        if (!alici) {
            return res.status(404).json({ message: 'Alici not found' });
        }
        return res.status(200).json(alici);
    } catch (error) {
        next(error);
    }
};

// Delete an Alici by ID
const deleteAlici = async (req, res, next) => {
    try {
        const { id } = req.params;
        const alici = await Alici.findByIdAndDelete(id);
        if (!alici) {
            return res.status(404).json({ message: 'Alici not found' });
        }
        return res.status(200).json({ message: 'Alici deleted' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAlicilar,
    getByIdAlici,
    createAlici,
    updateAlici,
    deleteAlici
};
