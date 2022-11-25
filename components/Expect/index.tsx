import React, {useRef, useMemo, useState} from 'react';

import styles from './index.module.scss'
import classNames from "classnames";

let timer: any = null;
const Process = () => {
    const [activeId, setActiveId] = useState<number | null>(null)
    const [style, setStyle] = useState<{ top: string, left: string }>({top: '0px', left: '0px'});

    const ref = useRef<HTMLDivElement>(null);

    const data = useMemo(() => {
        return [
            {
                id: 1,
                title: 'Faster',
                description: 'Be the first to tackle innovation and accelerate borderless solutions worldwide'
            },
            {
                id: 2,
                title: 'Better',
                description: 'Provide better products and services to your customers'
            },
            {
                id: 3,
                title: 'Cheaper',
                description: 'Reduce costs and make your business more efficient due to cutting edge technology'
            },
        ]
    }, [])

    const onMouseMove = (event: React.MouseEvent<HTMLDivElement>, id: number) => {
        clearTimeout(timer);
        setActiveId(id);
        setStyle({
            top: (event.clientY - event.currentTarget.getBoundingClientRect().y) + "px",
            left: (event.clientX - event.currentTarget.getBoundingClientRect().x) + "px",
        })
    }

    const onMouseOut = () => {
        setActiveId(null)
    }

    return (
        <div ref={ref} className={styles.sections}>
            <div>
                <h1 className={styles.sectionTitle}>What you should expect</h1>
                <p className={styles.sectionSubTitle}>As an outcome we expect to see your business perform and meet
                    evolving market needs.</p>
            </div>
            <div className={styles.cards}>
                {data.map(item => {
                    return (
                        <div key={item.id}
                             className={classNames([styles.card, {[styles.active]: item.id === activeId}])}
                             onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => onMouseMove(event, item.id)}
                             onMouseOut={onMouseOut}
                        >
                            <div className={styles.cardText}>
                                <h2 className={styles.cardTitle}>{item.title}</h2>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>
                            <div
                                style={
                                    item.id === activeId ?
                                        style :
                                        {
                                            top: '50%',
                                            left: '50%',
                                            transition: '0.4s all ease-in'
                                        }
                                }
                                className={styles.cardShadow}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Process;