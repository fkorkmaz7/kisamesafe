const newArabaMid = (req,res,next) => {
    const plaka = req.body.plaka;
    console.log(`Yeni arac : ${plaka}`);
    next();
}
const delArabaMid = (req,res,next) => {
    const plaka = req.body.plaka;
    console.log(`Silinen arac : ${plaka}`);
    next();
}

module.exports = {
    newArabaMid,
    delArabaMid
};