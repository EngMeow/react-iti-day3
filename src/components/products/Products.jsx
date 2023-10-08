import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getAllProducts, deleteProduct } from '../../API/productsAPI';

export function Products() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    setMyList(getAllProducts());
  }, []);

  const deleteAction = (productId) => {
    deleteProduct(productId);

    setMyList((prevList) => prevList.filter((product) => product.id !== productId));
  };

  const productsList = myList.map((product) => (
    <div key={product.id} className='col mb-4 border p-4 m-4 border-warning rounded'>
      <div><img className=" rounded img-fluid shadow w-100 fit-cover " src="https://images.pexels.com/photos/3250815/pexels-photo-3250815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." style={{height: 250}} /></div>
      <div className='fw-light lead '>Product id: {product.id}</div>
      <div className='fw-bold lead '>Product name: {product.name}</div>
      <div className='fw-light lead '>Product price: {product.price}</div>
      <div className='fw-light lead '>Product quantity: {product.quantity}</div>
        <NavLink to={`./${product.id}`} className="mx-2 fs-2 text-warning bi bi-eye-fill" />
        <NavLink to={`/products/${product.id}/edit`} className="mx-2 fs-2 text-info bi bi-pencil-square" />
        <i onClick={() => deleteAction(product.id)} className="mx-2 fs-2 text-danger bi bi-trash" />
    </div>
  ));

  return (
    <div>

  <section className="py-5">
  <div className="container py-5 ">
    <div className="row mb-5">
      <div className="col-md-8 col-xl-6 text-center mx-auto">
        <h2 className="fw-bold">Products</h2>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-4 m-auto" style={{maxWidth: 1200}}>
        {productsList}
    </div>
  </div>
</section>

  </div>
  );
}
