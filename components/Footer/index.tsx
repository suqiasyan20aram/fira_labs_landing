import React, {useMemo, useState} from 'react';
import Image from "next/image";

import styles from './index.module.scss'
import logo1 from '../../assets/images/logo-part-1-white.svg'
import logo2 from '../../assets/images/logo-part-2-white.svg'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Image src={logo1} alt={'logo'}/>
                </div>
                <div className={styles.main}>
                    <div className={styles.column}>
                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Fira Labs DAO</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <a href="">About Fira Labs DAO</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Message from Community</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Members and Associates</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Partners</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Join our DAO</a>
                                </p>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Commitments</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <a href="">Sustainability Strategy</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Corporate Social Responsibility</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Empowerment of oMembers</a>
                                </p>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Fun Lab</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <a href="">Win a POAP</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Business Advancement</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <a href="">Business model strategy</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Market and consumer research</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Roadmap for go-to market initiatives</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">DAO’s and Token Economics</a>
                                </p>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Growth Marketing</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <a href="">Community building</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Metaverse activation campaign</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Content creation</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Giveaway campaigns</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Influencer marketing</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Software Development</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <a href="">dApp Development</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Token Design and DAO governance</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Smart Contracts</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Protocol Design</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Decentralized Websites</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">NFT Marketplace and Minting</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">DEXs & DeFi</a>
                                </p>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Resources</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <a href="">Case Studies</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Use Cases</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Blog</a>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Technologies</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <a href="">React.js</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">React Native</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Nest.js</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Node.js</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Angular 2+</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Vue.js</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Swift</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">PHP (Laravel)</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Python (Django)</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Java</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Solidity</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Rust</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Ruby on Rails</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">C++</a>
                                </p>
                                <p className={styles.categoryItem}>
                                    <a href="">Golang</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <Image src={logo2} alt={'logo'}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;