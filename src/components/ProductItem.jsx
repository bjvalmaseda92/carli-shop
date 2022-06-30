import React, { useContext, useState } from "react";
import "@styles/ProductItem.scss";
import bt_add_to_cart from "@icons/bt_add_to_cart.svg";
import bt_added_to_cart from "@icons/bt_added_to_cart.svg";
import AppContext from "@contexts/AppContext";

const ProductItem = ({ product }) => {
  const {
    addToCart,
    removeFromCart,
    state: { cart },
  } = useContext(AppContext);
  const handleClick = (item) => {
    inCart ? removeFromCart(product.id) : addToCart(item);
  };

  const inCart = cart.some((item) => item.id === product.id);
  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={inCart ? bt_added_to_cart : bt_add_to_cart} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
