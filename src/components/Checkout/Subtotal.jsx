import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider'
import getBasketTotal from '../../reducer'
function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    let sum=0;
    basket.map((v,i)=>(
      sum+=v.price
    ) )
    return (
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
          Subtotal ({basket.length} items): <strong>
            {sum}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={0} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
  
        <button>Proceed to Checkout</button>
      </div>
    );
  }
  
  export default Subtotal;