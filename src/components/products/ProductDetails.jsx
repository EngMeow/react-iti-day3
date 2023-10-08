import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getProductById } from '../../API/productsAPI';
import { CounterContext } from '../../context/CounterContex';
import { CartContex } from '../../context/CartContex';

export function ProductDetails() {
  const { id } = useParams();
  const [myProduct, setMyProduct] = useState({});
  const counterValue = useContext(CounterContext);
  const cartValue = useContext(CartContex);
  const { increase, decrease, count } = counterValue;
  const { clickAction, productCart, removeAction } = cartValue;
  
  
  useEffect(() => {
    setMyProduct(getProductById(id));
  }, [id]);


  const addToCart = () => {
    setMyProduct((prevProduct) => ({
      ...prevProduct,
      counter: prevProduct.counter + 1,
    }));
    let x = productCart.find((product) => product.id === id);
    if (!x) {
      clickAction(myProduct);
      increase();
    }
    console.log(myProduct);
  };

  const removeFromCart = () => {
    setMyProduct((prevProduct) => ({
      ...prevProduct,
      counter: prevProduct.counter - 1,
    }));
    const x = productCart.find((product) => product.id === id);
    if (x && x.counter === 1) {
      removeAction(myProduct);
    } else {
      decrease();
    }
  };

  const actionClick = () => {
    if (myProduct.counter % 2 === 0) {
      removeFromCart();
    } else {
      addToCart();
    }
  };

  return (
    <>
      <section className="bg-dark text-light m-5 p-5 fs-3 rounded">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-5">
              <img
                className="card-img-top mb-5 mb-md-0 rounded"
                src="https://images.pexels.com/photos/3707744/pexels-photo-3707744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">product id : {myProduct.id}</div>
              <h1 className="display-5 fw-bolder">product name : {myProduct.name}</h1>
              <div className="small mb-1">product price : {myProduct.price}</div>
              <div className="small mb-1">product quantity : {myProduct.quantity}</div>
              <button onClick={actionClick} className="btn btn-outline-warning m-3 col-6">
                {myProduct.counter % 2 ? 'Add to cart' : 'Remove from cart'}
              </button>
              <NavLink to={'/products'} className="btn btn-outline-danger m-3 col-6">
                Back
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
