/*
 **En este archivo estableceremos como consultar un documento de la BDD mediante async-await
 */
//todo requerimos la conexion
require("../connection");
//todo requerimos el modelo
const User = require("../models/user");

//todo creamos una funcion asincrona
async function getUser(name = "Mario") {
  const user = await User.findOne({ username: name });
  console.log(user);
}

getUser();
