/*
 **En este archivo se interactua con la bd mediante los modelos
 **Deberia estar en otro archivo llamado ProductController.js
 */

//todo requerimos la conexion a la bd
require("./connection");

//todo requerimos el modelo
const Products = require("./models/product");

//todo instanciamos el modelo y lo definimos
const product = new Products({
  name: "laptop",
  description: "MSI GE75 Raider 8RE",
  price: 1299.75,
});

product.save((err, doc) => {
  console.log(err ? err : doc);
});
