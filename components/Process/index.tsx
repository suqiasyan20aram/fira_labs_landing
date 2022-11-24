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
                title: 'Analysis',
                description: 'Our expert team learns about your business, success story and values'
            },
            {
                title: 'Assessment',
                description: 'Explore the fundamentals of your business and build model strategy based on your strength'
            },
            {
                title: 'Ideation',
                description: 'Take a closer look at what you are trying to achieve'
            },
            {
                title: 'Planning',
                description: 'Put in place an execution plan to follow in order to reach your business goals'
            },
            {
                title: 'Execution',
                description: 'Our diverse team of experts is able to execute the best solution for your business growth and development'
            },
            {
                title: 'Stick to it and crush it',
                description: 'We outstaff a MOD (Manager of development) who will stick to you until we achieve our business goals'
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