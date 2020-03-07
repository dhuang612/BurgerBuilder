import React from 'react';
import Styles from './Button.module.css';

const Button = props =>{
    return(
        <button
        className={[Styles.Button, Styles[props.btnStyle]].join(' ')}
        onClick={props.clicked}
        >{props.children}</button>
    )
}

export default Button;