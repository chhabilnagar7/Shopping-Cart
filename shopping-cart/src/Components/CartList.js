import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div className='Add-To-CartItem'>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div>
                            
                            <img src={cartItem.url} width={40} />
                            <span> {cartItem.name} </span>

                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        // quantity of product is increasing through cartindex 
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity   - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {cartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }
            <div className='Cartitem-total'>

                <p> Total Amt. =   <span>Rs. </span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
                </p>
            </div>
            
        </div >
    )
}

export default CartList