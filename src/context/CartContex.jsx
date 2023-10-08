import React, { createContext, useState } from 'react';

export let CartContex = createContext();
// Create the context provider component
export function CartContexProvider(props) {

    let [ productCart , setProductCart ] = useState([])
    
    let clickAction = (product) => {
        setProductCart([...productCart,product])
    }

    let removeAction = (product) => {
      setProductCart([productCart.slice((x) => product.id == x.id)])
    }

    let productAdd = { clickAction , productCart , removeAction}
  return (
    <CartContex.Provider value={productAdd}>
      {props.children}
    </CartContex.Provider>
  );
}
