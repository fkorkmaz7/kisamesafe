const NewKullanici = (req, res, next) => {
    const ad_soyad = req.body.ad_soyad;
    console.log(`${ad_soyad} üye oldu`);
    next();
};
module.exports = NewKullanici;