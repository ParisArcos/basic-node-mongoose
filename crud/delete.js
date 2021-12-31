/*
 **En este archivo estableceremos como consultar la BDD mediante async-await
 */
//todo requerimos la conexion
require("../connection");
const Product = require("../models/product");

async function deleteProduct() {
  const res = await Product.findOneAndDelete({ description: "Acer 5970G" });
  console.log(res);
}

deleteProduct();
