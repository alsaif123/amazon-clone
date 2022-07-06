import React from "react";
import { useSateValue } from "../../StateProvider";
import "./Product.css";

const Product = ({id,name,star,img,price}) => {

  const [{basket},dispatch] = useSateValue();

  const addToBasket = () =>{
// add item to the basket
 dispatch({
  type: 'ADD_TO_BASKET',
  item: {
    id:id,
    name: name, 
    img : img,
    price: price,
    star: star,
  }
 })
  }

  return (
    <div className="product">
       <div className="product_info">
       <p>{name}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {
            Array(star)
            .fill()
            .map((_)=>(
              <p>⭐</p>
            ))

          }
        </div>
       </div>
        <img src={img} alt="" />
        <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
