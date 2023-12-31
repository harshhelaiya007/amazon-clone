import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { actionType } from "./reducer";

const Product = ({ id, title, rating, price, image }) => {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is " , basket)

  const addToBasket = () => {
    dispatch({
      type: actionType.ADD_TO_BASKET,
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
      </div>
      <img src={image} alt="book" />
      <button onClick={addToBasket}>add to card</button>
    </div>
  );
};

export default Product;
