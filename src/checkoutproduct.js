import React from "react";
import "./checkoutproduct.css";
import { useStateValue } from "./StateProvider";

function Checkoutproduct({ id, title, image, rating, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeproduct = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="checkoutProduct_image" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <button onClick={removeproduct}>Remove From cart</button>
      </div>
      <div></div>
    </div>
  );
}

export default Checkoutproduct;
