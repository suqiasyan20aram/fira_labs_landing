import React, {useMemo, useState} from 'react';
import gsap from "gsap";
import Image from "next/image";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

import styles from './index.module.scss'
import aramNFT from '../../assets/images/aramNFT.jpeg'
import aramPicture from '../../assets/images/aramPicture.jpeg'
import narekNFT from '../../assets/images/narekNFT.jpeg'
import narekPicture from '../../assets/images/narekPicture.jpeg'
import robNFT from '../../assets/images/robNFT.jpeg'
import robPicture from '../../assets/images/robPicture.jpeg'

gsap.registerPlugin(ScrollTrigger);

const TwitterIcon = () => {
    return (
        <svg fill={'#ffffff'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
    )
}

const LinkedinIcon = () => {
    return (
        <svg fill={'#ffffff'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
    )
}

const GithubIcon = () => {
    return (
        <svg fill={'#ffffff'} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
             viewBox="3 3 24 24">
            <path
                d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>
        </svg>
    )
}

const Authors = () => {
    const [style, setStyle] = useState({x: 0, y: 0})

    const text = useMemo(() => {
        const texts = [
            '❝We are running blockchain business for over 4 years. We set up IEOs, participated in NFT projects companies and collaborated with blockchain businesses & DeFi companies to build sustainable business models and grow community. We ran business development for most advanced anti-scam software, build a solution for biggest Swiss-based crypto broker, co-founded most popular marketing platform for crypto airdrops, and developed an advanced non-custodial multi-chain crypto wallet widely used in MENA region.❞',
            '❝Now we are building the web3 in joint forces and create a better internet. We exist to accelerate the impact of a blockchain technology and push wider adoption of crypto and blockchain. We build on blockchain to help businesses to make the right use of the technology and innovate in their industry. Become our partner and create the future with us.❞'
        ]

        return texts.map((txt: any, idx: number) => {
            return (
                <p key={idx} className={styles.quote}>
                    {
                        txt.split(' ').map((word: any, index: number) => {
                            return <span key={index} className={styles.glitch}><span>{word}</span> </span>
                        })
                    }
                </p>
            )
        })
    }, [])

    // const data = useMemo(() => {
    //     return [
    //         {
    //             id: 1,
    //             title: 'Robert Mkrtchian',
    //             profession: 'Product, Operations',
    //             nft: robNFT,
    //             picture: robPicture,
    //             social: [
    //                 {id: 1, label: "Twitter", url: '', icon: <TwitterIcon/>},
    //                 {id: 2, label: "Linkedin", url: '', icon: <LinkedinIcon/>},
    //             ]
    //         },
    //         {
    //             id: 2,
    //             title: 'Narek Nadaryan',
    //             profession: 'Software Engineer',
    //             nft: narekNFT,
    //             picture: narekPicture,
    //             social: [
    //                 {id: 1, label: "Github", url: '', icon: <GithubIcon/>},
    //                 {id: 2, label: "Linkedin", url: '', icon: <LinkedinIcon/>},
    //             ]
    //         },
    //         {
    //             id: 3,
    //             title: 'Aram Sukiasyan',
    //             profession: 'Software Engineer',
    //             nft: aramNFT,
    //             picture: aramPicture,
    //             social: [
    //                 {id: 1, label: "Github", url: 'https://github.com/aramsuqiasyan', icon: <GithubIcon/>},
    //                 {
    //                     id: 2,
    //                     label: "Linkedin",
    //                     url: 'https://www.linkedin.com/in/aram-suqiasyan-476305180/',
    //                     icon: <LinkedinIcon/>
    //                 },
    //             ]
    //         },
    //     ]
    // }, [])

    const onMouseMove = (e: any) => {
        const {top, left} = e.currentTarget.getBoundingClientRect();
        const fromCenterY = (85 * window.innerHeight / 200) - (e.clientY - top);
        const fromCenterX = (70 * window.innerHeight / 200) - (e.clientX - left);
        setStyle({x: fromCenterX, y: fromCenterY})
    }

    const onMouseOut = () => {
        setStyle({x: 0, y: 0})
    }


    return (
        <div className={styles.sections}>
            <div className={styles.sectionsInner}>
                <div
                    className={styles.imageBox}
                    onMouseMove={onMouseMove}
                    onMouseOut={onMouseOut}
                    style={{
                        transform: `perspective(800px) rotateX(${style.y / 80}deg)  rotateY(${-style.x / 80}deg)`
                    }}
                >
                    <video src={require('../../assets/videos/authors.webm')} autoPlay={true} muted={true} loop={true}/>
                </div>
                <div className={styles.mainBox}>
                    <div className={styles.sectionSubTitle}>
                        {text}
                    </div>
                    {/*<div className={styles.cards}>*/}
                    {/*    {data.map((item, index) => {*/}
                    {/*        return (*/}
                    {/*            <div key={item.id}*/}
                    {/*                 className={styles.card}*/}
                    {/*            >*/}
                    {/*                <div className={styles.cardText}>*/}
                    {/*                    <div className={styles.glitchImages}>*/}
                    {/*                        <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>*/}
                    {/*                        <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>*/}
                    {/*                        <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>*/}
                    {/*                        <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>*/}
                    {/*                        <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>*/}
                    {/*                        <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>*/}
                    {/*                        <Image src={item.picture} alt={'nft'} className={styles.pictureImage}/>*/}
                    {/*                    </div>*/}
                    {/*                    <div className={styles.cardInformation}>*/}
                    {/*                        <h2 className={styles.cardTitle}>{item.title}</h2>*/}
                    {/*                        <p className={styles.cardDescription}>{item.profession}</p>*/}
                    {/*                        <div className={styles.cardSocials}>*/}
                    {/*                            {item.social.map((social) => {*/}
                    {/*                                return (*/}
                    {/*                                    <a key={social.id} href={social.url}*/}
                    {/*                                       className={styles.cardSocial}>*/}
                    {/*                                        {social.icon}*/}
                    {/*                                    </a>*/}
                    {/*                                )*/}
                    {/*                            })}*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}

export default Authors;