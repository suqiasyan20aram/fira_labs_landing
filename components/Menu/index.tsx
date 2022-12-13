import React, {useMemo, useState} from 'react';

import styles from './index.module.scss'
import classNames from "classnames";

interface MenuProps {
    menuIsShown: boolean,
    toggleMenu: (shown: boolean) => void
}

const Menu: React.FC<MenuProps> = ({menuIsShown, toggleMenu}) => {
    const data = useMemo(() => {
        return [
            {
                id: 1,
                title: 'Robert Mkrtchian',
                profession: 'Product, Operations',
            },
            {
                id: 2,
                title: 'Narek Nadarian',
                profession: 'Exo',
            },
            {
                id: 3,
                title: 'Aram Sukiasian',
                profession: 'Cit',
            },
        ]
    }, [])

    console.log(menuIsShown)
    return (
        <div className={classNames([styles.menu, {[styles.shown]: menuIsShown}])}>
            <button onClick={() => toggleMenu(false)}>Close</button>
        </div>
    )
}

export default Menu;