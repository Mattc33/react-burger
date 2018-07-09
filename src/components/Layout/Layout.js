import React from 'react';
import styles from './Layout.css';
import Aux from './../../containers/hoc/Aux';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';

const Layout = (props) => (
    <Aux>
        <header className={styles.header}>Toolbar, SideDrawer, Backdrop</header>
        <main>
            {props.children}
        </main>
    </Aux>
)

export default Layout;
