import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useSateValue } from "../../StateProvider";
import './Subtotal.css'

const Subtotal = () => {
    const [{basket},dispatch] = useSateValue();

    
    return (
        <div className='subtotal'>
            <h3>Subtotal ({basket.length} items ): </h3>
            {/* <span> ${getBasketTotal(basket)}</span> */}
            {/* <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    Subtotal({basket.length} items):<strong>${value} </strong>
                </p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}

            /> */}

            <button>Procced to CheckOut</button>
        </div>
    );
};

export default Subtotal;