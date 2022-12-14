import React from 'react';
import Image from "next/image";

import styles from './index.module.scss'
import logo1 from '../../assets/images/logo-part-1-white.svg'
import logo2 from '../../assets/images/logo-part-2-white.svg'
import footerLink1 from '../../assets/images/iso-footer-1.png'
import footerLink2 from '../../assets/images/iso-footer-2.png'
import footerLink3 from '../../assets/images/iso-footer-3.png'
import footerLink4 from '../../assets/images/iso-footer-4.png'

const Footer = () => {
    return (
        <footer className={styles.footer}>
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
            <div className={styles.footerMiddleSection}>
                <div className={styles.links}>
                    <Image src={footerLink1} alt={'link'}/>
                    <Image src={footerLink2} alt={'link'}/>
                    <Image src={footerLink3} alt={'link'}/>
                    <Image src={footerLink4} alt={'link'}/>
                </div>
                <div className={styles.footerSocials}>
                    <a href={'mailto:enquiry@firalabs.com'}>enquiry@firalabs.com</a>
                    <a href={'https://telegram.com'} className={styles.headerSocialIcon}>
                        <i className={'icon-telegram'}></i>
                    </a>
                    <a href={'https://twitter.com'} className={styles.headerSocialIcon}>
                        <i className={'icon-twitter'}></i>
                    </a>
                    <a href={'https://linkedin.com'} className={styles.headerSocialIcon}>
                        <i className={'icon-linkedin'}></i>
                    </a>
                </div>
            </div>
            <div className={styles.footerCopySection}>
                <div className={styles.footerCopySectionLinks}>
                    <a href={'#'} className={styles.footerCopySectionLink}>Privacy Policy</a>
                    <a href={'#'} className={styles.footerCopySectionLink}>Terms Of Service</a>
                    <a href={'#'} className={styles.footerCopySectionLink}>Non Disclosure Agreement</a>
                    <a href={'#'} className={styles.footerCopySectionLink}>Acceptable User Policy</a>
                    <a href={'#'} className={styles.footerCopySectionLink}>Information Audit Document</a>
                    <a href={'#'} className={styles.footerCopySectionLink}>Data Processing Agreement</a>
                </div>
                <p className={styles.copyRight}>
                    <span className={styles.copyRightRow}>FiraLabs Dao.All Rights Reserved.</span>
                    <span className={styles.copyRightRow}>© 2023 FiraLabs and Logo Are Registered Trademarks Of FiraLabs Dao</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer;