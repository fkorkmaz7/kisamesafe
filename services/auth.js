const jwt = require("jsonwebtoken");


const signIn = async (body) => {
  const ad_soyad = body.ad_soyad;
  const parola = body.parola;
  const butce = body.butce;
  const tel_no = body.tel_no;





  if (ad_soyad === "mustafa" && parola === "123") {
    return generateToken(ad_soyad);
  } else {
    console.log("buraya giriyor mu ?");
    return "giriş yapamadı, kullanıcı hatalı şifre veya kullancıı adı";
  }
};

const generateToken = (ad_soyad) => {
  const token = jwt.sign({ istedigim: "buydu",buyuyecek:"veri" ,buyuyecekd:"veri" }, "cokgizli",{expiresIn:'2d'});
  return token;
};

module.exports = { signIn };


// ad_soyad : {type: String},
// butce : {type: Number},
// parola : {type: Number},
// tel_no: {type: Number},