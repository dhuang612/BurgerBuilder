import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import './layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component{
    state={
        showBackdrop: false
    }

    hideBackdropHandler = ()=>{
        this.setState({showBackdrop: false})
    }

    toggleSideDrawerHandler=()=>{
            this.setState((prevState)=>({
                showBackdrop: !prevState.showBackdrop
            }))
    }

    render(){

        return(
            <Aux>
                <Toolbar
                toggleBackdrop={this.toggleBackdropHandler}
                defaultBackdropState={this.state.showBackdrop}
                toggleSideDrawer={this.toggleSideDrawerHandler}
                />
                <SideDrawer
                    backdropState={this.state.showBackdrop}
                    hideBackdrop={this.hideBackdropHandler}
                />
                <main className="Content">{this.props.children}
                </main>
            </Aux>
        )

    }

}

export default Layout;