import React from 'react';
import styles from './Backdrop.module.css';

const Backdrop = (props)=>{
    console.log(props.toggleModal)
    return(props.toggleModal ? <div className={styles.Backdrop}
            onClick={props.toggleBackdrop}
    ></div>: null)
}

export default Backdrop;