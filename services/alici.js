const Alici = require("../models/alici")
const delAlici = async (id) => {
        const delAlici = await Alici.findByIdAndDelete(id);
        if(!delAlici) {
            throw new Error('Alici bulunamadi')
        }
        return delAlici;
};

module.exports = {delAlici};