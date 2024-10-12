const jwt = require("jsonwebtoken");
const Alici = require("../models/alici.js");

// Kullanıcı girişi (sign-in) fonksiyonu
const signIn = async (req, res, next) => {
  const { tel_no, parola } = req.body;

  try {
    // Kullanıcıyı telefon numarasıyla bul
    const alici = await Alici.findOne({ tel_no });

    // Kullanıcı bulunamadıysa veya parola yanlışsa
    if (!alici || alici.parola !== parola) {
      return res.status(401).json({ message: "Kullanıcı bulunamadı veya hatalı parola." });
    }

    // Giriş başarılı, JWT token oluştur
    const token = generateToken(alici.ad_soyad);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);  // Hata varsa, bir sonraki middleware'e yönlendir
  }
};

// Kullanıcı kaydı (sign-up) fonksiyonu
const signUp = async (body) => {
  const { tel_no, parola } = body;

  try {
    // Telefon numarasına göre kullanıcıyı bul
    const alici = await Alici.findOne({ tel_no });

    // Eğer kullanıcı bulunamazsa veya parola yanlışsa
    if (!alici || alici.parola !== parola) {
      return "Kullanıcı bulunamadı veya hatalı parola.";
    }

    // Başarılı, token oluştur ve döndür
    return generateToken(alici.ad_soyad);
  } catch (error) {
    throw new Error("Kayıt işleminde hata oluştu: " + error.message);
  }
};

// JWT token oluşturma fonksiyonu
const generateToken = (ad_soyad) => {
  const token = jwt.sign(
    { ad_soyad }, // Token içindeki veri
    "cokgizli",   // Gizli anahtar
    { expiresIn: '2d' }  // Tokenin geçerlilik süresi
  );
  return token;
};

module.exports = {
  signIn,
  signUp,
};