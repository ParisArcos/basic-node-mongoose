/*
 **En este archivo estableceremos como consultar la BDD mediante asyn-await
 */
//todo requerimos la conexion
require("../connection");
const Product = require("../models/product");

async function getProducts() {
  const products = await Product.find();
  console.log(products);
}

getProducts();
