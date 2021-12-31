/*
 **En este archivo estableceremos como guardar datos en la BDD mediante async-await
 */
//todo requerimos la conexion
require("../connection");
const Product = require("../models/product");
const User = require("../models/user");

//todo creamos una funcion asincrona
async function addProduct() {
  //todo creamos un producto
  const product = new Product({
    name: "laptop",
    description: "Acer 5970G",
    price: 299.35,
  });
  //todo guardamos el producto
  const productSaved = await product.save();
  return productSaved;
}

//todo ejecutamos la función
//? ejemplo de como manejar las respuestas mediante .then.catch
// addProduct()
//   .then((productSaved) => console.log(productSaved))
//   .catch((err) => console.log(err));

async function addUser() {
  const user = new User({
    username: "Mario",
    password: "señor",
  });

  const newUser = await user.save();
  return newUser;
}

addUser()
  .then((newUser) => console.log(newUser))
  .catch((err) => console.log(err));
