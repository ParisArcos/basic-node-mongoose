/*
 **En este archivo definiremos el esquema de los productos
 */

//todo requerimos Schema y model de mongoose
const { Schema, model, modelNames } = require("mongoose");

//todo intanciamos y definimos un nuevo esquema
const productSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
});

//todo exportamos el modelo
modelNames.exports = model("Product", productSchema);
