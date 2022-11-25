import {useRef, useMemo, useEffect, useState} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'
import classNames from "classnames";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    const [balloon, setBalloon] = useState<number[]>([])
    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef<HTMLDivElement>(null);

    const dataFirst = useMemo(() => {
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

    const dataSecond = useMemo(() => {
        return [
            {
                number: '04',
                title: 'Planning',
                description: 'Put in place an execution plan to follow in order to reach your business goals'
            },
            {
                number: '05',
                title: 'Execution',
                description: 'Our diverse team of experts is able to execute the best solution for your business growth and development'
            },
            {
                number: '06',
                title: 'Crush it',
                description: 'We outstaff a MOD (Manager of development) who will stick to you until we achieve our business goals'
            },
        ]
    }, [])

    const popBalloon = (number: number) => {
        setBalloon(prev => [...prev, number])
    }

    useEffect(() => {
        const element = ref.current;
        if (element) {
            // let animation1 = gsap.fromTo(element.querySelector(`.${styles.row}:nth-child(1)`),
            //     {
            //         top: 0
            //     },
            //     {
            //         top: -400,
            //         scrollTrigger: {
            //             trigger: element,
            //             start: "top top+=150",
            //             end: "top+=400 top+=150",
            //             scrub: 1,
            //         }
            //     }
            // );
            //
            // let animation2 = gsap.fromTo(element.querySelector(`.${styles.row}:nth-child(2)`),
            //     {
            //         top: 0
            //     },
            //     {
            //         top: -400,
            //         scrollTrigger: {
            //             trigger: element,
            //             start: "top+=400 top+=150",
            //             end: "top+=800 top+=150",
            //             scrub: 1,
            //         }
            //     }
            // );

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
            <div>
                <h1 className={styles.sectionTitle}>Our process</h1>
                <p className={styles.sectionSubTitle}>We work on making your business model sustainable in new economy
                    and
                    closer to evolving customer needs.</p>
            </div>
            {/*<div className={styles.clouds}>*/}
            {/*    <div className={styles.cloud}></div>*/}
            {/*    <div className={styles.cloud}></div>*/}
            {/*    <div className={styles.cloud}></div>*/}
            {/*</div>*/}
            <div className={styles.section}>
                <div className={classNames([styles.row, {[styles.popped]: balloon.includes(1)}])}>
                    {/*<div className={styles.balloon}*/}
                    {/*     onClick={() => popBalloon(1)}>*/}
                    {/*    <div className={styles.rope}></div>*/}
                    {/*</div>*/}
                    <div className={styles.rowInner}>
                        {dataFirst.map((item, index) => {
                            return (
                                <div key={index}
                                     className={styles.item}>
                                    <p className={styles.number}>{item.number}.</p>
                                    <h2 className={styles.title}>{item.title}</h2>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className={classNames([styles.row, {[styles.popped]: balloon.includes(2)}])}>
                    {/*<div className={styles.balloon}*/}
                    {/*     onClick={() => popBalloon(2)}>*/}
                    {/*    <div className={styles.rope}></div>*/}
                    {/*</div>*/}
                    <div className={styles.rowInner}>
                        {dataSecond.map((item, index) => {
                            return (
                                <div key={index}
                                     className={styles.item}>
                                    <p className={styles.number}>{item.number}.</p>
                                    <h2 className={styles.title}>{item.title}</h2>
                                    <p className={styles.description}>{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Process;