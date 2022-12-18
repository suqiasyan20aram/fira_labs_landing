import React, {useEffect, useMemo, useRef} from 'react';
import gsap from "gsap";
import Image from "next/image";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'
import bg from '../../assets/images/DAO-bg.png'
import Button from "../Button";
import {useRouter} from "next/router";
import {getRandomInteger} from "../../utils/constants";

gsap.registerPlugin(ScrollTrigger);

const Authors = () => {
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);

    const letters = useMemo(() => {
        return ["D", "A", "O", "D", "A", "O", "D", "A", "O", "D", "A", "O", "D", "A", "O", "D", "A", "O"].map((figure) => {
            return {
                type: figure,
                top: `${getRandomInteger(10, 90)}%`,
                left: `${getRandomInteger(10, 90)}%`,
                fontSize: getRandomInteger(12, 40),
                color: "#000000",
                animationDelay: `${getRandomInteger(-15, 15)}s`,
            }
        })
    }, [])

    const navigate = () => {
        router.push('/building')
    }

    useEffect(() => {
        let animation1: gsap.core.Tween;
        let animation2: gsap.core.Tween;
        let animation3: gsap.core.Tween;
        let animation4: gsap.core.Tween;

        const element = ref.current;
        if (element) {
            const {width, height} = element.getBoundingClientRect();

            const el1 = element.querySelector(`.${styles.card}`);
            if (el1) {
                const {width: width1, height: height1} = el1.getBoundingClientRect();
                animation1 = gsap.fromTo(el1,
                    {
                        y: -(height / 2 - height1 / 2 - 100),
                        x: -(width / 2 - width1 / 2 - 40),
                        opacity: 0,
                    },
                    {
                        y: 0,
                        x: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: element,
                            start: "top center-=200",
                            end: "top+=500 center",
                            scrub: 1,
                        }
                    }
                );
            }

            const el2 = element.querySelector(`.${styles.avatarWrapper}`);
            if (el2) {
                const {width: width2, height: height2} = el2.getBoundingClientRect();
                animation2 = gsap.fromTo(el2,
                    {
                        y: height / 2 - height2 / 2 - 100,
                        x: width / 2 - width2 / 2 - 40,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        x: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: element,
                            start: "top center-=200",
                            end: "top+=500 center",
                            scrub: 1,
                        }
                    }
                );
            }

            const el3 = element.querySelector(`.${styles.sectionTitle}`);
            if (el3) {
                const {width: width3, height: height3} = el3.getBoundingClientRect();
                animation3 = gsap.fromTo(el3,
                    {
                        y: height / 2 - height3 / 2 - 100,
                        x: width / 2 - width3 / 2 - 40,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        x: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: element,
                            start: "top center-=200",
                            end: "top+=500 center",
                            scrub: 1,
                        }
                    }
                );
            }
            animation4 = gsap.fromTo(element.querySelectorAll(`.${styles.letters}`),
                {
                    top: window.innerHeight,
                    bottom: window.innerHeight,
                },
                {
                    top: -window.innerHeight,
                    bottom: -window.innerHeight,
                    scrollTrigger: {
                        trigger: element,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 2,
                    }
                }
            );
        }

        return () => {
            !!animation1 && animation1.kill();
            !!animation2 && animation2.kill();
            !!animation3 && animation3.kill();
            !!animation4 && animation4.kill();
        }
    }, []);

    return (
        <div id={'section-dao'} ref={ref} className={styles.sections}>
            <h1 className={styles.sectionTitle}>Discover <span className={styles.highlight}>Decentures Ltd.</span></h1>

            <div className={styles.mainBlock}>
                <div className={styles.avatarWrapper}>
                    <Image src={bg} alt={'avatar'} width={350} height={350} className={styles.avatar}/>
                </div>

                <div className={styles.card}>
                    <p className={styles.cardText}>
                        DAO-FL is a decentralized organization with members from Europe, UK, United States, Canada,
                        Western
                        Asia and UAE.
                    </p>
                    <p className={styles.cardText}>
                        We are all-inclusive community for digital product experts who share a common goal and attempt
                        to
                        act in the best interest of the business we work with.
                    </p>
                    <Button text={'Explore DAO'} variant={'primary-outline'} onClick={navigate}/>
                </div>
            </div>

            <div className={styles.letters}>
                {letters.map((letter, index) => {
                    return (
                        <div key={index} style={{
                            position: 'absolute',
                            top: letter.top,
                            left: letter.left,
                            color: letter.color,
                            fontSize: letter.fontSize,
                            animationDelay: letter.animationDelay
                        }}>
                            {letter.type}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Authors;