import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss";
import AppContext from "@contexts/AppContext";
import littleArrow from "@icons/flechita.svg";

const MyOrder = () => {
  const {
    state: { cart },
  } = useContext(AppContext);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((product) => (
          <OrderItem key={`OrderItem-${product.id}`} product={product} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>$560.00</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
