import {useRef, useEffect} from 'react';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'
import Button from "../Button";
import {useRouter} from "next/router";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);

    const data = [
        {
            title: 'Consulting',
            children: [
                {
                    title: 'Business model strategy',
                    description: 'We’ll come up with a business model strategy that would be the most efficient for new solutions we make together by focusing on building competitive advantage.'
                },
                {
                    title: 'Market and consumer research',
                    description: 'Our experts will research, investigate and analyze a target market to collect data and test the viability of a new product or service.'
                },
                {
                    title: 'Roadmap for go-to market initiatives',
                    description: 'Our product managers capture and coordinate the timing of all the cross-functional activities required to release a well-structured go-to-market roadmap.'
                },
                {
                    title: 'DAO’s and tokenomics',
                    description: 'Our managers of development will help you to create a proper incentivization model which in turn will increase the value for token holders and create an economic model which benefits all stakeholders in the system.'
                },
            ]
        },
        {
            title: 'Marketing',
            children: [
                {
                    title: "Community building",
                    description: "Community marketing will allow to build reputation and setup for resilient growth in the long-term and bring customers together over a topic that is aligned with, or directly related to, a brand in an engaging and non-intrusive way."
                },
                {
                    title: "Metaverse activation campaign",
                    description: "Our Metaverse activation experts find the proper virtual environment where the brand would live and decide how it will interact with its audience within the platform."
                },
                {
                    title: "Content creation",
                    description: "Web3 creates an entirely different communications experience between sites and users from anything we’ve seen so far by mixing existing means of content creation with advanced technologies like AR, VR and Metaverse."
                },
                {
                    title: "Giveaway campaigns",
                    description: "By using a large toolkit of giveaway initiatives our team of growth hackers will activate giveaway campaigns that include crypto airdrops, freemints, rumbles and more mechanisms to grow the size audience in decentralized and traditional social media platforms."
                },
                {
                    title: "Influencer marketing",
                    description: "Having a vast network of partners and toolkit for targeting most prominent influencers in our clients’ domains our marketing experts will launch influencer marketing campaigns within any budget without sacrificing the efficiency of the initiative."
                },
            ]
        },
        {
            title: 'Development',
            children: [
                {
                    title: "dApp development",
                    description: "Experinced in Solidity, Golang and Rust, we build decentralized web applications to support web3 services and solutions. Our web developers are committed to build next-gen customized web3 dApps."
                },
                {
                    title: "Token design and DAO governance",
                    description: "Proper token design lays under every successful DAO as its main purpose is to automate and decentralize the governance of organizations, such as corporations. The structure of DAOs is flat and depends on the operation of smart contracts to enforce rules and decisions within the organization."
                },
                {
                    title: "Smart contracts",
                    description: "We have an extensive experience in developing smart contracts for our clients and ensure full-cycle smart contract development process starting with defining the business logic and completing it with write unit tests to make sure it performs as intended."
                },
                {
                    title: "Protocol design",
                    description: "While looking for right protocol for your use case our blockchain engineers will focus on various factors like bridging, cost, energy efficiency to make sure the protocol design will serve the goal."
                },
                {
                    title: "Decentralized websites",
                    description: "By using IPFS, ENS and Limo technologies our team of web engineers will develop a fully decentralized websites and apps on the new open web: permissionless, trustless, censorship resistant, and free of centralized gatekeepers."
                },
                {
                    title: "NFT marketplace and minting",
                    description: "Bringing the latest methods and technologies to you disposition our developers will take care of all the aspects of NFT development including NFT marketplace developments, NFT minting and storage, NFT game development."
                },
                {
                    title: "DEXs & DeFi",
                    description: "We are experts in developing and building innovative DeFi solutions. DeFi products and services  disrupt the role of intermediaries and redefine traditional financial services such as lending, trading, investment, payment and insurance."
                },
            ]
        }
    ]

    const learnMoreHandler = () => {
        router.push('/building')
    }

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
        <div id={'section-services'} ref={ref} className={styles.sectionWrapper}>
            <h1 className={styles.sectionTitle}>High-impact services</h1>
            <div className={styles.section}>
                <div className={styles.left}>
                    {data.map(block => {
                        return <h2 key={block.title} className={styles.leftTitle}>{block.title}</h2>
                    })}
                </div>
                <div className={styles.right}>x
                    <div className={styles.services}>
                        {data[0].children.map(service => {
                            return (
                                <div key={service.title} className={styles.service}>
                                    <h3 key={service.title} className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description} </p>
                                    <Button text={'Learn More'} variant={'link'} onClick={learnMoreHandler}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.services}>
                        {data[1].children.map(service => {
                            return (
                                <div key={service.title} className={styles.service}>
                                    <h3 key={service.title} className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description} </p>
                                    <Button text={'Learn More'} variant={'link'} onClick={learnMoreHandler}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.services}>
                        {data[2].children.map(service => {
                            return (
                                <div key={service.title} className={styles.service}>
                                    <h3 key={service.title} className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description} </p>
                                    <Button text={'Learn More'} variant={'link'} onClick={learnMoreHandler}/>
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