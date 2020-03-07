import React from 'react';
import './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const Burger = (props)=>{
    // Storing props as a var since we need to access it twice
    const incomingIngredients = props.stateIngredients;

    //returns me the names of the ingredients inside of an array, don't have amounts.
    let customerOrder = Object.keys(incomingIngredients).map(igKey => {
        console.log(igKey)
        return [...Array(incomingIngredients[igKey])].map((_,i)=> {
            return <BurgerIngredients key={igKey +i } type={igKey} />
        })

    }).reduce((arr, el) => {
        return arr.concat(el)
   }, [])

    if(customerOrder.length === 0){
        customerOrder = <p>Please start adding ingredients!</p>
    }
    return (

        <div className="Burger">
            <BurgerIngredients type="bread-top" />
            {customerOrder}
            <BurgerIngredients type="bread-bottom" />
    </div>
    );
};

export default Burger;
