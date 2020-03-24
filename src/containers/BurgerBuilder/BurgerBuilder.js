import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axiosApiCall';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: .5,
    meat: .75,
    cheese: .65,
    bacon: 1
}

class BurgerBuilder extends Component{
state ={
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    showSpinner: false,
}

orderButtonHandler = (updatedInigredients)=>{

    let sum = Object.keys(updatedInigredients).map((igName)=>{

        return updatedInigredients[igName];

    }).reduce((sum, el)=>{
        return sum + el;
    }, 0)

 this.setState({purchasable: sum > 0})

}


addIngredientsHandler = (type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    const updatedInigredients = {
        ...this.state.ingredients
    }
    updatedInigredients[type] = updatedCount;
    const currentPrice = this.state.totalPrice;
    const updatePrice = currentPrice + INGREDIENT_PRICES[type]
    this.setState({
        totalPrice: updatePrice,
        ingredients: updatedInigredients
    })
    this.orderButtonHandler(updatedInigredients);
}

removeIngredientsHandler = (type)=> {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    if(updatedCount < 0){
        return;
    }
    const updatedInigredients = {
        ...this.state.ingredients
    }
    updatedInigredients[type] = updatedCount;
    const currentPrice = this.state.totalPrice;
    const updatePrice = currentPrice - INGREDIENT_PRICES[type]
    this.setState({
        totalPrice: updatePrice,
        ingredients: updatedInigredients
    })
    this.orderButtonHandler(updatedInigredients);
}

purchaseHandler = ()=>{
    this.setState({purchasing: true})
}

cancelPurchaseHandler = ()=>{
    this.setState({purchasing: false})
}

continuePurchaseHandler = async () =>{
    // alert('You are continuing!')
    const order = {
        ingredients: this.state.ingredients,
        price: this.state.totalPrice,
        customerInfo: {
            name: 'Dan Wang',
            address:{
                street: 'teststreet',
                zipCode: '42231',
                country: 'America'
            },
            phone: '655-5555',
            email: 'testemail@test.com',
        },
        deliveryMethod: 'fastest'
    }
    try{
        const sendOrder = await axios.post('orders.json', order)
        console.log(sendOrder)
        this.setState({showSpinner:true, purchasing:false})
    }
    catch(errors){
        console.log(errors)
        this.setState({showSpinner:false,purchasing: false})
    }
}

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
                disabledInfo[key] = disabledInfo[key] <= 0
            }
            let orderSummary = null;
            let burger = this.state.error ? <p>Ingredients cant be loaded</p> : <Spinner/>;
        if(this.state.ingredients){
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BurgerControls
                    addIngredient={this.addIngredientsHandler}
                    removeIngredient={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchase={this.state.purchasable}
                    order={this.purchaseHandler}/>
                </Aux>
            );
            orderSummary = <OrderSummary ingredients={this.state.ingredients}
            cancelOrder={this.cancelPurchaseHandler}
            continueOrder={this.continuePurchaseHandler}
            price={this.state.totalPrice}/>;

        }

        if(this.state.showSpinner){
            orderSummary = (<Spinner/>)
        }

        return(
            <Aux>

                <Modal
                showModal={this.state.purchasing}
                displayBackdrop={this.cancelPurchaseHandler}
                >
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
