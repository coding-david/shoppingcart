import React from "react";

const CartTableItem = ({pro}) => {
    
    const centsToDollar = cents => `$${cents/100}`
    
  return (
    <div className="list-group-item">
      <div className="row">
        <div readOnly={true} className="col-md-8">
          {pro.name}
        </div>
        <div readOnly={true} className="col-md-2">
          {centsToDollar(pro.priceInCents)}
        </div>
        <div readOnly={true} className="col-md-2">
          {pro.quantity}
        </div>
      </div>
    </div>
  );
};

export default CartTableItem;
