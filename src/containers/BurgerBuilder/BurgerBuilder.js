import React, { Component } from 'react';
import Aux from './../../containers/hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            
        }
    }

    render() {
        return (
            <Aux>
                <Burger />
                <div>Build Controls</div>
            </Aux>
        );
    }

}

export default BurgerBuilder;