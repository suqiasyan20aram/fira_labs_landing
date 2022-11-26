import {useRef, useMemo, useEffect, useCallback} from 'react';
import gsap from "gsap";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {Container, Engine} from "tsparticles-engine";

import styles from './index.module.scss'

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
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

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

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
            <div>
                <h1 className={styles.sectionTitle}>Our process</h1>
                <p className={styles.sectionSubTitle}>We work on making your business model sustainable in new economy
                    and
                    closer to evolving customer needs.</p>
            </div>
            <div className={styles.section}>
                <div className={styles.row}>
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

                <div className={styles.row}>
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
            <Particles
                id="process-particles"
                init={particlesInit}
                loaded={particlesLoaded}
                style={{position: 'absolute'}}
                options={{
                    style: {
                        position: 'absolute'
                    },
                    background: {
                        color: {
                            value: "red",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#6300b4",
                        },
                        links: {
                            color: "#de39ff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: true,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 100,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 5},
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    )
}

export default Process;