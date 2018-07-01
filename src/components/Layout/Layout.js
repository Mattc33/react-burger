import React from 'react';
import styles from './Layout.css';

import Aux from '../../hoc/Aux';

const Layout = (props) => (
    <Aux>
    <header className={styles.header}>Toolbar, SideDrawer, Backdrop</header>
    <main>
        {props.children}
    </main>
    </Aux>
)

export default Layout;
