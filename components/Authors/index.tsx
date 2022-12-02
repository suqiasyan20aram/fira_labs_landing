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
import authorsImage from '../../assets/images/authors.jpeg'

gsap.registerPlugin(ScrollTrigger);

const Authors = () => {
    const [style, setStyle] = useState({x: 0, y: 0})

    const text = useMemo(() => {
        const txt = '❝ We are running blockchain business for over 4 years. We set up IEOs, participated in NFT projects companies and collaborated with blockchain businesses & DeFi companies to build sustainable business models and grow community. We ran business development for most advanced anti-scam software, build a solution for biggest Swiss-based crypto broker, co-founded most popular marketing platform for crypto airdrops, and developed an advanced non-custodial multi-chain crypto wallet widely used in MENA region. ❞'
        return txt.split(' ').map((word, index) => {
            return <span key={index} className={styles.glitch}><span>{word}</span> </span>
        })
    }, [])

    const data = useMemo(() => {
        return [
            {
                id: 1,
                title: 'Robert Mkrtchian',
                profession: 'Product, Operations',
                nft: robNFT,
                picture: robPicture,
            },
            {
                id: 2,
                title: 'Narek Nadarian',
                profession: 'Exo',
                nft: narekNFT,
                picture: narekPicture,
            },
            {
                id: 3,
                title: 'Aram Sukiasian',
                profession: 'Cit',
                nft: aramNFT,
                picture: aramPicture,
            },
        ]
    }, [])

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
                    <Image src={authorsImage} alt={'image'}/>
                </div>
                <div className={styles.mainBox}>
                    <div className={styles.cards}>
                        {data.map((item, index) => {
                            return (
                                <div key={item.id}
                                     className={styles.card}
                                >
                                    <div className={styles.cardText}>
                                        <div className={styles.glitchImages}>
                                            <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>
                                            <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>
                                            <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>
                                            <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>
                                            <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>
                                            <Image src={item.nft} alt={'nft'} className={styles.glitchImage}/>
                                            <Image src={item.picture} alt={'nft'} className={styles.pictureImage}/>
                                        </div>
                                        <h2 className={styles.cardTitle}>{item.title}</h2>
                                        <p className={styles.cardDescription}>{item.profession}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <p className={styles.sectionSubTitle}>
                        {text}
                        {text}
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Authors;