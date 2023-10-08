import { productList } from '../models/ProductList';

let getAllProducts = () => {
  return productList;
}

let getProductById = (productId) => {
  return productList.find((product) => product.id == productId);
}

let addNewProduct = (product) => {
  return productList.push(product);
}

let editProduct = (productId, updatedProduct) => {
  const index = productList.findIndex((product) => product.id == productId);

  if (index !== -1) {
    productList[index] = { ...productList[index], ...updatedProduct };
    return true; // Return true to indicate successful edit
  }

  return false; // Return false to indicate product not found
}

let deleteProduct = (productId) => {
  const index = productList.findIndex((product) => product.id == productId);

  if (index !== -1) {
    productList.splice(index, 1);
    return true; // Return true to indicate successful deletion
  }

  return false; // Return false to indicate product not found
}

export { getAllProducts, getProductById, addNewProduct, editProduct, deleteProduct };
