import {useRef, useEffect} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    const ref = useRef<HTMLDivElement>(null);

    const data = [
        {
            title: 'Consulting',
            children: ['Business model strategy', 'Market and consumer research', 'Roadmap for go-to market initiatives', 'DAO’s and Token Economics']
        },
        {
            title: 'Marketing',
            children: ["Community building", "Metaverse activation campaign", "Content creation", "Giveaway campaigns", "Influencer marketing"]
        },
        {
            title: 'Development',
            children: ["dApp Development", "Token Design and DAO governance", "Smart Contracts", "Protocol Design", "Decentralized Websites", "NFT Marketplace and Minting", "DEXs & DeFi"]
        }
    ]


    useEffect(() => {
        const element = ref.current;
        if (element) {
            let animation4 = gsap.fromTo(element.querySelectorAll(`.${styles.leftTitle}:nth-child(1)`),
                {
                    color: 'rgba(231, 233, 234,1)',
                },
                {
                    color: 'rgba(231, 233, 234,0.2)',
                    scrollTrigger: {
                        trigger: element,
                        start: "top+=25% center",
                        end: "top+=25% center",
                        scrub: 1,
                    }
                }
            );

            let animation1 = gsap.fromTo(element.querySelectorAll(`.${styles.leftTitle}:nth-child(1)`),
                {
                    color: 'rgba(231, 233, 234,0.2)'
                },
                {
                    color: 'rgba(231, 233, 234,1)',
                    scrollTrigger: {
                        trigger: element,
                        start: "top center",
                        end: "top center",
                        scrub: 1,
                    }
                }
            );

            let animation5 = gsap.fromTo(element.querySelectorAll(`.${styles.leftTitle}:nth-child(2)`),
                {
                    color: 'rgba(231, 233, 234,1)',
                },
                {
                    color: 'rgba(231, 233, 234,0.2)',
                    scrollTrigger: {
                        trigger: element,
                        start: "top+=56.25% center",
                        end: "op+=56.25% center",
                        scrub: 1,
                    }
                }
            );

            let animation2 = gsap.fromTo(element.querySelectorAll(`.${styles.leftTitle}:nth-child(2)`),
                {
                    color: 'rgba(231, 233, 234,0.2)'
                },
                {
                    color: 'rgba(231, 233, 234,1)',
                    scrollTrigger: {
                        trigger: element,
                        start: "top+=25% center",
                        end: "top+=25% center",
                        scrub: 1,
                    }
                }
            );

            let animation3 = gsap.fromTo(element.querySelectorAll(`.${styles.leftTitle}:nth-child(3)`),
                {
                    color: 'rgba(231, 233, 234,0.2)'
                },
                {
                    color: 'rgba(231, 233, 234,1)',
                    scrollTrigger: {
                        trigger: element,
                        start: "top+=56.25% center",
                        end: "top+=56.25% center",
                        scrub: 1,
                    }
                }
            );

            return () => {
                !!animation1 && animation1.kill();
                !!animation2 && animation2.kill();
                !!animation3 && animation3.kill();
                !!animation4 && animation4.kill();
                !!animation5 && animation5.kill();
            }
        }
    }, [])

    return (
        <div ref={ref} className={styles.sectionWrapper}>
            <h1 className={styles.sectionTitle}>High-impact services</h1>
            <div className={styles.section}>
                <div className={styles.left}>
                    {data.map(block => {
                        return <h2 key={block.title} className={styles.leftTitle}>{block.title}</h2>
                    })}
                </div>
                <div className={styles.right}>
                    <div className={styles.services}>
                        {data[0].children.map(service => {
                            return (
                                <div key={service} className={styles.service}>
                                    <h3 key={service} className={styles.serviceTitle}>{service}</h3>
                                    <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim in eros. </p>
                                    <span className={styles.serviceButton}>Learn More</span>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.services}>
                        {data[1].children.map(service => {
                            return (
                                <div key={service} className={styles.service}>
                                    <h3 key={service} className={styles.serviceTitle}>{service}</h3>
                                    <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim in eros. </p>
                                    <span className={styles.serviceButton}>Learn More</span>
                                </div>

                            )
                        })}
                    </div>
                    <div className={styles.services}>
                        {data[2].children.map(service => {
                            return (
                                <div key={service} className={styles.service}>
                                    <h3 key={service} className={styles.serviceTitle}>{service}</h3>
                                    <p className={styles.serviceDescription}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Suspendisse varius enim in eros. </p>
                                    <span className={styles.serviceButton}>Learn More</span>
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