import React, {useMemo} from 'react';
import Image from "next/image";
import classNames from "classnames";

import styles from './index.module.scss'
import closeIcon from '../../assets/images/close.svg'

interface MenuProps {
    menuIsShown: boolean,
    onClose: () => void
}

const Menu: React.FC<MenuProps> = ({menuIsShown, onClose}) => {
    const data = useMemo(() => {
        return [
            {
                id: 1,
                title: 'Services',
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

    return (
        <div className={classNames([styles.menu, {[styles.shown]: menuIsShown}])}>
            <div className={styles.header}>
                <span className={styles.close} onClick={onClose}>
                    <Image src={closeIcon} alt={'close'} width={24} height={24}/>
                </span>
            </div>
            <div className={styles.list}>
                {data.map(item => {
                    return (
                        <div key={item.id} className={styles.listItem}>
                            <span className={styles.title}>{item.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu;