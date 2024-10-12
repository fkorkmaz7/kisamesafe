const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');  // dotenv paketini ekledim

const arabaRoutes = require('./routes/araba');
const aliciRoutes = require('./routes/alici');
const faturaRoutes = require('./routes/fatura');

dotenv.config();//.env dosyasini yukledim.

const app = express();
app.use(express.json());

app.use('/araba', arabaRoutes);
app.use('/alici', aliciRoutes);
app.use('/fatura', faturaRoutes);

// MongoDB bağlantısı için .env dosyasındaki URI'yi kullan
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`sistem ${port} portunda çalıştırıldı `);
})
