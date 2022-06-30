import React, { useContext } from "react";
import "@styles/OrderItem.scss";
import close from "@icons/icon_close.png";
import AppContext from "@contexts/AppContext";

const OrderItem = ({ product, indexValue }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleClick = () => removeFromCart(product.id);
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src={close}
        alt="close"
        className="button-close"
        onClick={handleClick}
      />
    </div>
  );
};

export default OrderItem;