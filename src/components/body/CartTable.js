import React from "react";
import CartTableItem from './CartTableItem'

const CartTable = ({cartList,products}) => {

  const createItem = (item) => {
    let pro = products.find(product => product.id === item.product_id)
    console.log({...pro,quantity:item.quantity,cart_id:item.id});
    return {...pro,quantity:item.quantity,cart_id:item.id}
  }
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {cartList.map((pro, i) => (
          <CartTableItem key={i} readOnly={true} pro={createItem(pro)}  />
        ))}
      </div>
    </div>
  );
};

export default CartTable;
