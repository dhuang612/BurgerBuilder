import React from 'react';
import styles from './BurgerIngredients.module.css';
import {PropTypes} from 'proptype';
// Udemy video is using a switch statement / trying out a if statement instead
const BurgerIngredients = (props)=>{
    let ingredient = null;
    if(props.type === 'bread-bottom'){
        ingredient = <div className={styles.BreadBottom}></div>;
    }
        else if(props.type ==='bread-top'){
            ingredient = <div className={styles.BreadTop}><p className={styles.Seeds1}></p>
            <p className={styles.Seeds2}></p></div>;
        }

        else if(props.type ==='meat'){
            ingredient = <div className={styles.Meat}></div>;
        }
        else if(props.type ==='cheese'){
            ingredient = <div className={styles.Cheese}></div>;
        }
        else if(props.type === 'salad'){
            ingredient = <div className={styles.Salad}></div>;
        }

        else if(props.type ==='bacon'){
            ingredient = <div className={styles.Bacon}></div>;
        }

    return ingredient;
}

BurgerIngredients.propTypes = ({
   type : PropTypes.string.isRequired
})

export default BurgerIngredients;