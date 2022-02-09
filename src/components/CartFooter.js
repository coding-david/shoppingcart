import React from "react";

const CartFooter = ({ copy, date }) => {
  return (
    <nav className="navbar navbar-dark bg-dark footer">
      <a className="navbar-brand" href="#">
        {copy}
        {date}
      </a>
    </nav>
  );
};

export default CartFooter;
