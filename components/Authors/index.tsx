import React, {useRef, useMemo, useEffect} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    const ref = useRef<HTMLDivElement>(null);

    const text = useMemo(() => {
        const txt = 'We are running blockchain business for over 4 years. We set up IEOs, participated in NFT projects companies and collaborated with blockchain businesses & DeFi companies to build sustainable business models and grow community. We ran business development for most advanced anti-scam software, build a solution for biggest Swiss-based crypto broker, co-founded most popular marketing platform for crypto airdrops, and developed an advanced non-custodial multi-chain crypto wallet widely used in MENA region.'
        return txt.split(' ').map((word, index) => {
            return <span key={index} className={styles.glitch}>{word} </span>
        })
    }, [])

    const data = useMemo(() => {
        return [
            {
                id: 1,
                title: 'Robert Mkrtchian 🫡',
                profession: 'Product, Operations',
            },
            {
                id: 2,
                title: 'Narek Nadarian 🤑',
                profession: 'Exo',
            },
            {
                id: 3,
                title: 'Aram Sukiasian 🤯',
                profession: 'Cit',
            },
        ]
    }, [])

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
                    top: -100,
                    bottom: -100,
                    scrollTrigger: {
                        trigger: element,
                        start: "top center",
                        end: "bottom bottom",
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
        >
            <div className={styles.cards}>
                {data.map(item => {
                    return (
                        <div key={item.id}
                             className={styles.card}
                        >
                            <div className={styles.cardText}>
                                <h2 className={styles.cardTitle}>{item.title}</h2>
                                <p className={styles.cardDescription}>{item.profession}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <p className={styles.sectionSubTitle}>
                {text}
            </p>
        </div>
    )
}

export default Process;