import React from "react";
import { useSateValue } from "../../StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";

const CheckOut = () => {
  const [{ basket }, dispatch] = useSateValue();

  return (
    <div>
     <div className="checkout"><div> <img
        className="checkout_ad"
        src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
        alt=""
      /></div>
      <div> {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}</div></div>

      {basket?.length === 0 ? (
        <div className='container'>
          <h2>
            <strong>Your Shopping Basket is Empty</strong>{" "}
          </h2>
          <p>
            You have no items in your basket.To bye one or more items, click
            "Add to basket" next to the item.{" "}
          </p>
        </div>
      ) : (
        <div className='container'>
          <h2>Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              name={item.name}
              img={item.img}
              price={item.price}
              rating={item.star}
            />
          ))}
        </div>
      )}
     
    </div>
  );
};

export default CheckOut;
