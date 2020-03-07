import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
]

const BuildControls = (props) => {

    return(
        <div className={styles.BuildControls}>
              <p><strong>${props.price.toFixed(2)}</strong></p>
            {controls.map((ingredient)=> {

                console.log(ingredient.type)

               return (
               <BuildControl
                    label={ingredient.label}
                    key={ingredient.label}
                    add={()=>props.addIngredient(ingredient.type)}
                    remove={()=>props.removeIngredient(ingredient.type)}
                    disabled={props.disabled[ingredient.type]}

               />)
})}
            <button className={styles.OrderButton}
            disabled={!props.purchase}
            onClick={props.order}
            >Order</button>
        </div>
    )
}

export default BuildControls;