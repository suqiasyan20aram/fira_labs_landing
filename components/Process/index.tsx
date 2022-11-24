import {useEffect, useRef, useMemo} from 'react';
import gsap from "gsap";
import classNames from "classnames";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef<HTMLDivElement>(null);

    const data = useMemo(() => {
        return [
            {
                title: 'We help to transform your business',
                description: 'Our experts will help your business'
            },
            {
                title: 'We help to transform your business',
                description: 'Our experts will help your business'
            },
            {
                title: 'We help to transform your business',
                description: 'Our experts will help your business'
            },
            {
                title: 'We help to transform your business',
                description: 'Our experts will help your business'
            },
            {
                title: 'We help to transform your business',
                description: 'Our experts will help your business'
            },
            {
                title: 'We help to transform your business',
                description: 'Our experts will help your business'
            },
        ]
    }, [])

    useEffect(() => {
        const element = ref.current;
        if (element) {
            let animation = gsap.fromTo(element.querySelectorAll(`.${styles.cardWrapper}`),
                {
                    y: '-100vh',
                    scale: 0.5,
                    opacity: 0,
                },
                {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom bottom",
                        scrub: 1,
                    }
                }
            );

            return () => {
                !!animation && animation.kill();
            }
        }
    }, []);

    return (
        <div ref={ref} className={styles.sections}>
            <div className={styles.section}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className={styles.cardWrapper} style={{zIndex: data.length - index}}>
                            <div key={index} className={styles.card}>
                                <div className={styles.cardInner}>
                                    <h2 className={styles.title}>{item.title}</h2>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Process;