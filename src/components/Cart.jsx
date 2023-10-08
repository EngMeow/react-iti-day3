import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContex';
import { CartContex } from '../context/CartContex';

export  function Cart() {
  let productData =  useContext( CartContex );
  let CounterData =  useContext( CounterContext );
  let { count , increase , decrease } = CounterData
  let { productCart } = productData
  console.log(productCart);
  let productList = productCart.map((product) => (
    <div key={(product.id)} className="row d-flex justify-content-between bg-warning p-3 rounded align-items-center">
              <div className="col-md-2  col-lg-2 col-xl-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp" className="img-fluid rounded-3" alt="Cotton T-shirt" />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <h2 className=" mb-2">{product.name}</h2>
                <h5> Quantity: {product.quantity - count} </h5>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2" onClick={() => increase()}>
                <i className="bi bi-plus-square-fill fs-3 text-success"></i>
                </button>
                <h1> {count}</h1>
                <button className="btn btn-link px-2" onClick={() => decrease() }>
                <i className="bi bi-dash-square-fill fs-3 text-danger"></i>                
                  </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h2 className="mb-0">{product.price * count}$</h2>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger"><i className="fas fa-trash fa-lg" /></a>
              </div>
            </div>
  ))


  return (
    <>
    <section className="h-100" style={{backgroundColor: '#eee'}}>
    <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
        </div>
        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            {productList}
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-body p-4 d-flex flex-row">
            <div className="form-outline flex-fill">
              <input type="text" id="form1" className="form-control form-control-lg" />
              <label className="form-label" htmlFor="form1">Discound code</label>
            </div>
            <button type="button" className="btn btn-outline-warning btn-lg ms-3">Apply</button>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </> 
  )
}
