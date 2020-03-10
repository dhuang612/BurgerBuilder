import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component{
    componentDidUpdate(){
        console.log('[OrderSummary] updated!')
    }
    render(){
    const currentOrder = this.props.ingredients;

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
                <p><strong>${this.props.price.toFixed(2)}</strong></p>
            <p>Continue with order?</p>
            <Button
            clicked={this.props.cancelOrder}
            btnStyle="Danger"
            >CANCEL</Button>

             <Button
             clicked={this.props.continueOrder}
             btnStyle="Success"
             label="SUCESS"
            >SUCESS</Button>
            </Aux>
        )
    }
}


export default OrderSummary;