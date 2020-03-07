import React from 'react';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props)=> {
    // showModal contains the state to show or hide
    console.log(props.showModal)
return( props.showModal ?
    <Aux><Backdrop  toggleBackdrop={props.displayBackdrop}
        toggleModal={props.showModal}
    />
    <div className={styles.Modal}>
    {props.children}
</div></Aux> : null)

}

export default Modal;