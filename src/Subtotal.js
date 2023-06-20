import React from 'react';
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css"
import { useStateValue } from './StateProvider';
import { getBasktetTotal } from './reducer';
import {  useNavigate  } from "react-router-dom";


const Subtotal = () => {
    const [{basket} ,dispatch] = useStateValue();
    const navigate = useNavigate()
    
  return (
    <div className='subtotal'>
        <CurrencyFormat
        renderText={(value)=>(
            <>
            <p>
                Subtotal{basket.length}: <strong>
                    {`${value}`}
                </strong>
            </p>
            <small className='subtotal_gift'>
                <input type="Checkbox"/>This order contains a gift
            </small>
            </>
        )}

    

        decimalScale={2}
        value={getBasktetTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        />
        <button onClick={()=>{navigate('payment')}}>Procees to Checkout</button>


      
    </div>
  )
}

export default Subtotal
