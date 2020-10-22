import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from '../../StateProvider'

function CheckoutProduct(props) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:props.id
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={props.image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {Array(props.ratting).fill().map((_, i) => {
                        return <p>⭐</p>
                    })}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct