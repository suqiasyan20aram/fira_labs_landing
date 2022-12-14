import React, {useMemo} from 'react';
import Image from "next/image";
import classNames from "classnames";

import styles from './index.module.scss'
import closeIcon from '../../assets/images/close.svg'

interface MenuProps {
    menuIsShown: boolean,
    onClose: () => void
}

interface ListItem {
    id: number,
    title: string,
    sectionId: string,
    offsetPercent?: number
}

const Menu: React.FC<MenuProps> = ({menuIsShown, onClose}) => {
    const data: ListItem[] = useMemo(() => {
        return [
            {
                id: 1,
                title: 'Our Process',
                sectionId: 'section-process'
            },
            {
                id: 2,
                title: 'Consulting',
                sectionId: 'section-services',
                offsetPercent: 0,
            },
            {
                id: 3,
                title: 'Marketing',
                sectionId: 'section-services',
                offsetPercent: 25,
            },
            {
                id: 4,
                title: 'Development',
                sectionId: 'section-services',
                offsetPercent: 56.25,
            },
            {
                id: 5,
                title: 'Fira Labs DAO',
                sectionId: 'section-dao'
            },
            {
                id: 6,
                title: 'Industries',
                sectionId: 'section-industries'
            },
            {
                id: 7,
                title: 'Contact',
                sectionId: 'section-contact'
            },
        ]
    }, [])

    const clickHandler = (item: ListItem) => {
        if (item.sectionId) {
            const section: HTMLDivElement | null = document.querySelector(`#${item.sectionId}`);
            if (section) {
                const offset = item.offsetPercent ? section.clientHeight * item.offsetPercent / 100 : 0;
                const top = section.offsetTop + offset - 66;
                window.scrollTo({top, behavior: 'smooth'});
            }
        }
        onClose();
    }

    return (
        <div className={classNames([styles.menu, {[styles.shown]: menuIsShown}])}>
            <div className={styles.header}>
                <span className={styles.close} onClick={onClose}>
                    <Image src={closeIcon} alt={'close'} width={16} height={16}/>
                </span>
            </div>
            <div className={styles.list}>
                {data.map(item => {
                    return (
                        <div key={item.id} className={styles.listItem} onClick={() => clickHandler(item)}>
                            <span className={styles.title}>{item.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Menu;