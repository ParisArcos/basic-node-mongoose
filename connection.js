/*
 **En este archivo estableceremos la conexion a la bd
 */

//todo requerimos mongoose
const mongoose = require("mongoose");

//? esto deberia estar en un archivo .env
const uri = "mongodb://localhost:27017/try-db";

//?abreviatura
const db = mongoose.connection;

//todo establecemos la conexion
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(err));

//todo mensaje de exito
db.once("open", (_) => {
  console.log(`DB connected to ${uri}`);
});

//todo mensaje de error
db.on("error", (err) => {
  console.log(err);
});
