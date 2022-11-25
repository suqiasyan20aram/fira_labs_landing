import {useRef, useMemo, useEffect, useState} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'
import classNames from "classnames";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef<HTMLDivElement>(null);

    const data = useMemo(() => {
        return [
            {
                number: '01',
                title: 'Analysis',
                description: 'Our expert team learns about your business, success story and values'
            },
            {
                number: '02',
                title: 'Assessment',
                description: 'Explore the fundamentals of your business and build model strategy based on your strength'
            },
            {
                number: '03',
                title: 'Ideation',
                description: 'Take a closer look at what you are trying to achieve'
            },
        ]
    }, [])

    useEffect(() => {
        const element = ref.current;
        if (element) {
            let animation1 = gsap.fromTo(element.querySelector(`.${styles.row}:nth-child(1)`),
                {
                    left: '90%'
                },
                {
                    left: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: "top center",
                        end: "top+=400 center",
                        scrub: 1,
                    }
                }
            );

            let animation2 = gsap.fromTo(element.querySelector(`.${styles.row}:nth-child(2)`),
                {
                    left: '-90%'
                },
                {
                    left: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: "top+=300 center",
                        end: "top+=700 center",
                        scrub: 1,
                    }
                }
            );

            return () => {
                !!animation1 && animation1.kill();
                !!animation2 && animation2.kill();
            }
        }
    }, [])

    return (
        <div ref={ref} className={styles.sections}>
          Expect
        </div>
    )
}

export default Process;