const Alici = require(`../models/alici`);
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

module.exports = {
    getAlicilar,
    createAlici,
    deleteAlici

};