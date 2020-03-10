import React from 'react';
import Styles from './Toolbar.module.css';
import Logo from '../../../hoc/layout/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const Toolbar = (props) =>(
    <header className={Styles.Toolbar}>
             <DrawerToggle
             clicked={props.toggleSideDrawer}
             />
            <div className={Styles.Logo}>
                <Logo/>
            </div>
        <nav className={Styles.DontShowNav}>
            <NavigationItems/>
        </nav>
    </header>
)


export default Toolbar;

/*
  <div>menu</div>
*/