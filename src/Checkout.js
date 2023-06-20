import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import Checkoutproduct from "./checkoutproduct";
import { useStateValue } from "./StateProvider";

export default function Checkout() {
  // reducer
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img src="/images/amazon-ad.jpg" className="checkouit_ad" />
        <div>
          <h2 className="checkout_title">Your Shoping Basket</h2>
          {user && <h3>Welcome,{user.email}</h3>}

          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            // ,
            // console.log("ok",item),
            // console.log("array" , basket)
            // ,
            // console.log(item.rating)
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
  