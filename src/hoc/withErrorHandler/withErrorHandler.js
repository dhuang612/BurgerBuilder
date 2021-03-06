import React, {Component} from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler =(WrappedComponent, axios)=>{
    // Anon function
    return class extends Component{
        state={
            error: null
        }

        componentDidMount(){
            axios.interceptors.request.use(request  => {
                this.setState({error: null});
                return request;
            });

            axios.interceptors.response.use(res => res, error =>{
                this.setState({error})
            })

        }
        errorConfirmedHandler = () =>{
            this.setState({error: null})
        }

        render(){
            return(
                    <Aux>
                        <Modal
                            show={this.state.error}
                            clicked={this.errorConfirmedHandler}>
                                {this.state.error ? this.state.error.message: null}
                            </Modal>
                                <WrappedComponent {...this.props}/>
                            </Aux>
                    );
                }
            }
        }

export default withErrorHandler;