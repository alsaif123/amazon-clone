import React from 'react';
import { useSateValue } from '../../StateProvider';
import './CheckOutProduct.css';

const CheckOutProduct = ({id, name,img ,price ,star }) => {
    const [{basket},dispatch] = useSateValue();

    const removeFromBasket = () =>{
            dispatch({
                type:"REMOVE_FROM_BASKET",
                id:id
            })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={img} alt="" />
            <div className="checkoutProduct_info">
                <p className='checkoutProduct_name'>{name}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
          {
            Array(star)
            .fill()
            .map((_)=>(
              <p>⭐</p>
            ))

          }
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    );
};

export default CheckOutProduct;