import React from 'react';
import Styles from './SideDrawer.module.css';
import Logo from '../../layout/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = (props)=>{
    // We are adding extra logic here to style icons when this gets shown.
    let currentStyle = [Styles.SideDrawer, Styles.Close]
    if(props.backdropState){
        currentStyle = [Styles.SideDrawer, Styles.Open]
    }
    return(
        <Aux>
            <Backdrop
                toggleBackdrop={props.hideBackdrop}
                toggleModal={props.backdropState}
            />
        <div className={currentStyle.join(' ')}>
           <div>Menu</div>
            <div className={Styles.Logo}>
            <Logo />
            </div>
            <nav>
        <NavigationItems />
            </nav>
        </div>
        </Aux>
    )
}

export default SideDrawer;