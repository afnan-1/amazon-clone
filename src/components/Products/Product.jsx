import React from 'react'
import './product.css'
function Product(props) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(props.ratting).fill().map((_,i)=>{
                      return  <p>⭐</p>
                    })}
                </div>


            </div>
            <img src={props.imageUrl} alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
