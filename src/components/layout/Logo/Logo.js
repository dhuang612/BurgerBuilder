import React from 'react';
import BurgerIcon from '../../../assets/images/BurgerIcon.png';
import Styles from './Logo.module.css';


const Logo = props =>{
  return(  <div
    className={Styles.Logo}
    style={{height: props.height}}
  ><img
    src={BurgerIcon} alt='BurgerImage'/>
    </div>)
}

export default Logo;