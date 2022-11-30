import React, {useRef, useMemo, useEffect, useState} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'
import firaLogo from '../../assets/images/logo.svg'
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Line = () => {
    const ref = useRef<HTMLDivElement>(null);
    const timer = useRef<any>(0);
    const animation1 = useRef<any>(null);
    const animation2 = useRef<any>(null);

    const [height, setHeight] = useState(0);

    const words = useMemo(() => {
        return ['NFT', 'METAVERSE', 'BLOCKCHAIN', 'DEX', 'WEB3', 'DAO', 'TOKEN ECONOMY', "ETHEREUM", 'SMART CONTRACTS', 'ONLINE GAMING', "DEFI", 'CRYPTO WALLETS']
    }, [])

    const degToRad = (v: number) => v * 0.0174532925;

    const calculateHeight = () => {
        setHeight(40 + Math.ceil(window.innerWidth * Math.tan(degToRad(6))) + (70 / Math.cos(degToRad(6))))
    }

    const addAnimations = () => {
        const element = ref.current;
        if (element) {
            animation1.current = gsap.fromTo(element.querySelectorAll(`.${styles.line}:nth-child(1)`),
                {
                    transform: 'rotate(6deg) translateX(-49%)',
                },
                {
                    transform: 'rotate(6deg) translateX(-1%)',
                    scrollTrigger: {
                        trigger: element,
                        start: "top-=100 bottom-=300",
                        end: "bottom+=100 top+=300",
                        scrub: 2,
                    }
                }
            );
            animation2.current = gsap.fromTo(element.querySelectorAll(`.${styles.line}:nth-child(2)`),
                {
                    transform: 'rotate(-4deg) translateX(-1%)',
                },
                {
                    transform: 'rotate(-4deg) translateX(-49%)',
                    scrollTrigger: {
                        trigger: element,
                        start: "top-=100 bottom-=300",
                        end: "bottom+=100 top+=300",
                        scrub: 2,
                    }
                }
            );
        }
    }

    const windowResizeHandler = () => {
        clearTimeout(timer.current);
        !!animation1.current && animation1.current.kill();
        !!animation2.current && animation2.current.kill();

        timer.current = setTimeout(() => {
            calculateHeight();
            addAnimations();
        }, 50)
    }

    useEffect(() => {
        calculateHeight();
        addAnimations()

        window.addEventListener('resize', windowResizeHandler)

        return () => {
            !!animation1.current && animation1.current.kill();
            !!animation2.current && animation2.current.kill();
            window.removeEventListener('resize', windowResizeHandler)
        }
    }, []);

    return (
        <div ref={ref}
             style={{height}}
             className={styles.lines}
        >
            <div className={styles.line}>
                {words.map((word, index) => {
                    return (
                        <React.Fragment key={index}>
                            <span className={styles.word}>{word}</span>
                            <Image src={firaLogo} alt={'logo'} className={styles.logo}/>
                        </React.Fragment>
                    )
                })}
            </div>
            <div className={styles.line}>
                {words.map((word, index) => {
                    return (
                        <React.Fragment key={index}>
                            <span className={styles.word}>{word}</span>
                            <Image src={firaLogo} alt={'logo'} className={styles.logo}/>
                        </React.Fragment>
                    )
                })}
            </div>
        </div>
    )
}

export default Line;