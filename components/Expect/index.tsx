import React, {useRef, useMemo, useState, useEffect} from 'react';
import gsap from "gsap";
import Image from "next/image";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'
import fasterIcon from '../../assets/images/faster.svg'
import betterIcon from '../../assets/images/better.svg'
import cheaperIcon from '../../assets/images/cheaper.svg'
import {getRandomInteger} from "../../utils/constants";

gsap.registerPlugin(ScrollTrigger);

const Expect = () => {
    const ref = useRef<HTMLDivElement>(null);

    const [style, setStyle] = useState<{ top: string, left: string }>({top: '0px', left: '0px'});

    const figures = useMemo(() => {
        return ['cycle', 'square', 'cycle', 'square', 'triangle', 'cycle', 'triangle', 'square', 'triangle', 'cycle', 'triangle', 'square'].map((figure) => {
            return {
                type: figure,
                top: `${getRandomInteger(10, 90)}%`,
                left: `${getRandomInteger(10, 90)}%`,
                scale: getRandomInteger(0.8, 2),
                animationDelay: `${getRandomInteger(-15, 15)}s`,
            }
        })
    }, [])

    const data = useMemo(() => {
        return [
            {
                id: 1,
                title: 'Faster',
                icon: fasterIcon,
                description: 'Be the first to tackle innovation and accelerate borderless solutions worldwide'
            },
            {
                id: 2,
                title: 'Better',
                icon: betterIcon,
                description: 'Provide better products and services to your customers'
            },
            {
                id: 3,
                title: 'Cheaper',
                icon: cheaperIcon,
                description: 'Reduce costs and make your business more efficient due to cutting edge technology'
            },
        ]
    }, [])

    const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        setStyle({
            top: Math.min(event.currentTarget.getBoundingClientRect().height - 220, Math.max(220, (event.clientY - event.currentTarget.getBoundingClientRect().y))) + "px",
            left: Math.max(220, (event.clientX - event.currentTarget.getBoundingClientRect().x)) + "px",
        })
    }

    useEffect(() => {
        const element = ref.current;
        if (element) {
            let animation1 = gsap.fromTo(element.querySelectorAll(`.${styles.card}`),
                {
                    y: 200,
                },
                {
                    y: 0,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom-=100",
                        end: "bottom bottom-=100",
                        scrub: 0,
                    }
                }
            );


            let animation2 = gsap.fromTo(element.querySelectorAll(`.${styles.figures}`),
                {
                    top: 200,
                    bottom: 200,
                },
                {
                    top: -200,
                    bottom: -200,
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                    }
                }
            );

            return () => {
                !!animation1 && animation1.kill();
                !!animation2 && animation2.kill();
            }
        }
    }, []);

    return (
        <div ref={ref}
             className={styles.sections}
             onMouseMove={onMouseMove}
        >
            <div className={styles.sectionInfo}>
                <h1 className={styles.sectionTitle}>What you should expect</h1>
                <p className={styles.sectionSubTitle}>As an outcome we expect to see your business perform and meet
                    evolving market needs.
                </p>
            </div>
            <div className={styles.cards}>
                {data.map(item => {
                    return (
                        <div key={item.id}
                             className={styles.card}
                        >
                            <div className={styles.cardText}>
                                <div className={styles.cardIcon}>
                                    <Image src={item.icon} alt={'icon'} width={80}/>
                                </div>
                                <h2 className={styles.cardTitle}>{item.title}</h2>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div
                style={style}
                className={styles.cardShadow}
            />
            <div className={styles.figures}>
                {figures.map((figure, index) => {
                    return <div key={index} className={styles[figure.type]} style={{
                        position: 'absolute',
                        top: figure.top,
                        left: figure.left,
                        transform: `scale(${figure.scale})`,
                        animationDelay: figure.animationDelay
                    }}/>
                })}
            </div>
        </div>
    )
}

export default Expect;