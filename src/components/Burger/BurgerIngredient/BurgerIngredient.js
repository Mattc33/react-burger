import React, {Component} from 'react';
import styles from './BurgerIngredient.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seed1}></div>
                        <div className={styles.Seed2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={styles.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={styles.Cheese}></div>
                break;
            case ('Salad'):
                ingredient = <div className={styles.Salad}></div>
                break;
            case ('Bacon'):
                ingredient = <div className={styles.Bacon}></div>
                break;
            default: 
                ingredient = null;
        }
        return ingredient;
    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;
