const { signIn } = require("../services/auth");

const login = async (req, res, next) => {

    const body = req.body;
    const data = await signIn(body);
    
    //return??
    res.status(200).json(data);
}

module.exports = { login };