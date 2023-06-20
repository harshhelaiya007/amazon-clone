import { React, useEffect, useState } from 'react'
import './payment.css'
import { useStateValue } from './StateProvider';
import Checkoutproduct from './checkoutproduct';
import { Link, useNavigate } from "react-router-dom";
import CurrencyFormat from 'react-currency-format';
import { getBasktetTotal } from './reducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { db } from "./firebase";

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();
    const [processing , setProcessing] = useState("");
const [succeded , setSucceeded] = useState(false);
           const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret , setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'Post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasktetTotal(basket) * 100}`
            });
            console.log("the responseee" , response.data)
            setClientSecret(response.data.clientSecret)

        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            
            setSucceeded(true);
            
            setError(null)
            setProcessing(false)
           
            dispatch({
                type: 'EMPTY_BASKET'
            })
           
            navigate.replace('/orders')

        })

    }

    const handleChange = event => {
        setDisabled(event.empty);
        console.log(event.empty , event.target)
        setError(event.error ? event.error.message : "")


    }

    return (
        <div>
            <div className='payment'>
                <div className='payment_container'>
                    <h1>
                        Checkout(<Link to="/checkout">{basket.length} items</Link>)

                    </h1>

                    <div className='payment_section'>
                        <div className='payment_title'>
                            <h3>delivery address</h3>

                        </div>
                        <div className='payment_address'>
                            <p> {user?.email}</p>
                            <p>123 santosh nagar</p>
                            <p>Dahisar</p>

                        </div>

                    </div>

                    <div className='payment_section'>
                        <div className='payemnt_title' >
                            <h3>Review Items and delivery</h3>

                        </div>
                        <div className='payment_items'>
                            {basket.map(item => (
                                <Checkoutproduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}



                                />



                            ))}

                        </div>





                    </div>

                    <div className='payment_section'>
                        <div className='payment_title'>
                            <h3>Payment Method</h3>

                        </div>

                        <div className='payment_details'>

                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange} />
                                <div className='payment_priceContainer'>

                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <>
                                            <h3>Order Total :{value}</h3>
                                               </>
                                        )}



                                        decimalScale={2}
                                        value={getBasktetTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={ disabled }>
                                        <span>{processing ? <p>processing</p> : 'Buy Now'}</span>
                                    </button>

                                </div>

                                {error && <div>{error}</div>}

                            </form>

                        </div>

                    </div>


                </div>




            </div>



        </div>
    )
}

export default Payment
