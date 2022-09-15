const { query } = require("express");
const express = require("express");
const { products } = require("../../database/data");
const Products = require("../../database/data");

let products = new Products();

const route = express.Router();

route.get("/", (req, res) => {
  let productResponse = [...products];
  return res.json(productResponse);
route.get("/", async (req, res) => {
  const data = await products.getAll().then((res) => res);
  res.json(data);
});

route.get("/:id", (req, res) => {
route.get("/:id", async (req, res) => {

    const { id } = req.params;

    const product = products.find((product) => product.id === +id);

    const product = await products.getById(+id);

    if (!product) {
    return res.status(404).json({
@@ -37,20 +39,25 @@ route.post("/", (req, res) => {
  }

  const newProduct = {
    id: products.length + 1,
    id: products.products.length + 1,
    title,
    price,
    thumbnail,
  };


  products.push(newProduct);
  products.products.push(newProduct);

  res.json({ status: "successfull", result: newProduct });
  res.json({
    status: "successfull",
    result: newProduct,
    "new Products": products,
  });
  

route.put("/:id", (req, res) => {
route.put("/:id", async (req, res) => {
 
  const {
@@ -64,9 +71,7 @@ route.put("/:id", (req, res) => {
    });
  }
  const productIndex = products.findIndex(
    (product) => product.id === Number(id)
  );
  const productIndex = await products.getFindIndex(id);
  if (productIndex < 0) {
    return res.status(404).json({
@@ -82,21 +87,21 @@ route.put("/:id", (req, res) => {
    thumbnail,
  };
  products[productIndex] = newProduct;
  products.products[productIndex] = newProduct;
  return res.json({ success: true, result: newProduct });
});

route.delete("/:id", (req, res) => {
route.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deleteProduct = products.find((product) => product.id === +id);
  const deleteProduct = await products.getById(+id);
  if (deleteProduct === undefined) {
    return res.status(404).json({
      status: false,
      error: `Product with id: ${id} not found`,
    });
  }
  const newListProduct = products.filter((product) => product != deleteProduct);
  console.log(deleteProduct);
  const newListProduct = await products.deleteProduct(deleteProduct);
  res.json({
    success: true,
    result: newListProduct,
  });
});
module.exports = route;