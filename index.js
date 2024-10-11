const express = require('express');
const mongoose = require('mongoose');
const arabaRoutes = require('./routes/araba');
const aliciRoutes = require('./routes/alici');
const faturaRoutes = require('./routes/fatura');

const app = express();
app.use(express.json());

app.use('/araba',arabaRoutes);
app.use('/alici',aliciRoutes);
app.use('/fatura',faturaRoutes);

const MONGO_URI = 'mongodb+srv://furkank1024:kartal712@cluster0.0wcf902.mongodb.net/fesadb';

mongoose
  .connect(MONGO_URI, {

  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
 port = 3000;
  app.listen(port, () => {
    console.log(`sistem ${port} portunda çalıştırıldı `);
  })
