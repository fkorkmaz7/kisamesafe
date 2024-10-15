const Alici = require(`../models/alici`);
<<<<<<< HEAD
const getAlicilar = async (req, res, next) => {
    const alicilar = await Alici.find();
    return res.status(200).send(alicilar);
}
const createAlici = async (req, res, next) => {
    const yeni_alici = await Alici.create(req.body);
    return res.send(yeni_alici)
};
const deleteAlici = async (req, res, next) => {
    const alici = await Alici.findbyIdAndDelete(id);
    return res.status(200).send(alici);
};
=======
const getAlicilar = async (req,res,next) => {
    const alicilar = await Alici.find();
    return res.status(200).send(alicilar);
}

const createAlici = async (req,res,next) => {
    const yeni_alici = await Alici.create(req.body);
    return res.send(yeni_alici)
};

const deleteAlici = async (req,res,next) => {
    const alici = await Alici.findbyIdAndDelete(id);
    return res.status(200).send(alici);
};

>>>>>>> e960994e87b18e4f0b66b1ae4c2fee3e0a89a7a5
module.exports = {
    getAlicilar,
    createAlici,
    deleteAlici
<<<<<<< HEAD
=======

>>>>>>> e960994e87b18e4f0b66b1ae4c2fee3e0a89a7a5
};