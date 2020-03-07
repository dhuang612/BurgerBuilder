import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';


const OrderSummary = (props)=>{
    const currentOrder = props.ingredients;
    console.log(props)
    const displayOrder = Object.keys(currentOrder).map((igName)=>{
    return (
        <li style={{textTransform: 'capitalize',
            listStyle: 'none'}}>{igName}:  {currentOrder[igName]}
        </li>

        )
    })
    return(
        <Aux>
            <h1>Your current order:</h1>
            <ul>
                {displayOrder}
            </ul>
            <p><strong>${props.price.toFixed(2)}</strong></p>
        <p>Continue with order?</p>
        <Button
        clicked={props.cancelOrder}
        btnStyle="Danger"
        >CANCEL</Button>

         <Button
         clicked={props.continueOrder}
         btnStyle="Success"
         label="SUCESS"
        >SUCESS</Button>
        </Aux>
    )
}

export default OrderSummary;