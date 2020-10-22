import React from 'react'
import './product.css'
import { useStateValue } from '../../StateProvider'
function Product(props) {
    const [{basket},dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:props.id,
                title:props.title,
                image:props.imageUrl,
                price:props.price,
                rating:props.ratting,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.ratting).fill().map((_, i) => {
                        return <p>⭐</p>
                    })}
                </div>


            </div>
            <img src={props.imageUrl} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
