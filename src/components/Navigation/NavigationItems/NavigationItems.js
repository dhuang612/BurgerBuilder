import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Styles from './NavigationItems.module.css'

const NavigationItems = ()=>(

        <ul className={Styles.NavigationItems}>
            <NavigationItem
            link={"/"}
            highlight
    >Burger Builder</NavigationItem>
    <NavigationItem
            link={"/"}

    >Checkout</NavigationItem>
        </ul>
)
export default NavigationItems;