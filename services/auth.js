const jwt = require("jsonwebtoken");
const Alici = require("../models/alici.js");

const signIn =  async (req, res, next) => {
    const { id } = req.params;
    const { ad_soyad, butce, parola, tel_no} = req.body
    const alici = await Alici.findByIdAndUpdate(id, {//crate degistir
        ad_soyad,
        butce,
        parola,
        tel_no
    }, { new: true });
    return res.status(200).send(alici);
}

const signUp = async (body) => {
    const tel_no = body.tel_no;
    const parola = body.parola;

    const alici = await Alici.findOne({ tel_no: tel_no });
        
  
    if (alici?.parola === parola){
      return generateToken(tel_no);//
    } else {
      console.log("buraya giriyor mu ?");
      return "giriş yapamadı, kullanıcı hatalı şifre veya kullancıı adı";
    }
  };


const generateToken = (tel_no) => {

  const token = jwt.sign({ istedigim: "buydu",buyuyecek:"veri" ,buyuyecekd:"veri" }, "cokgizli",{expiresIn:'2d'});
  console.log("girdi");
  
  return token;
};

module.exports = { 
    signIn ,
    signUp,
};


// ad_soyad : {type: String},
// butce : {type: Number},
// parola : {type: Number},
// tel_no: {type: Number},