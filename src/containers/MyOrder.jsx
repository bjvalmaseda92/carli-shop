import React, { useContext } from "react";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss";
import AppContext from "@contexts/AppContext";
import littleArrow from "@icons/flechita.svg";

const MyOrder = ({ setToggle }) => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const sum = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  const handleClose = () => setToggle(false);
  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={littleArrow} alt="arrow" onClick={handleClose} />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        <div className="my-order-list">
          {cart.map((product, index) => (
            <OrderItem
              key={`OrderItem-${index}`}
              indexValue={index}
              product={product}
            />
          ))}
        </div>
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sum()}</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
