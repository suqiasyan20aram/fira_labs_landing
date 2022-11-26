import {useEffect, useRef} from 'react';
import gsap from "gsap";
import classNames from "classnames";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'

gsap.registerPlugin(ScrollTrigger);

const Help = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            let animation = gsap.fromTo(element.querySelectorAll(`.${styles.section}`),
                {x: '0%'},
                {
                    x: '-100%',
                    scrollTrigger: {
                        trigger: element,
                        start: "top top-=100",
                        end: "bottom top-=100",
                        scrub: 1,
                        pin: true,
                    }
                }
            );

            return () => {
                !!animation && animation.kill();
            }
        }
    }, []);

    return (
        <div className={styles.background}>
            <div ref={ref} className={styles.sections}>
                <div className={classNames(styles.section, styles.beforeSection)}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>We help to transform your business</h2>
                        <p className={styles.description}>
                            Our experts will help your business find a new vector for growth by
                            planning and executing a new advancement strategy using cutting-edge technology and growth
                            techniques
                            used in web3 space
                        </p>
                    </div>
                </div>
                <div className={classNames(styles.section, styles.afterSection)}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>Creative Solutions for the New Internet</h2>
                        <p className={styles.description}>
                            Partner with us today to develop the best solutions for your business and become the
                            industry&apos;s
                            innovation leader tomorrow
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help;