/*
 **En este archivo estableceremos como actualizar un documento de la BDD mediante async-await
 */
//todo requerimos la conexion
require("../connection");
//todo requerimos el modelo
const User = require("../models/user");

//todo creamos una funcion asincrona
async function updateUser(name = "Mario") {
  const user = await User.findByIdAndUpdate(
    { username: "Mario" },
    {
      password: "noyojoven",
    }
  );
  console.log(user);
}

updateUser();
