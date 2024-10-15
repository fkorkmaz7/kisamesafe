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

const UpdateFiyatMid = (req,res,next) => {
    const plaka = req.body.plaka;
    console.log(`${plaka}'lı aracın fiyatı güncellendi`);
    next();
};
module.exports= UpdateFiyat;

module.exports = {
    newArabaMid,
    delArabaMid,
    UpdateFiyatMid,
};