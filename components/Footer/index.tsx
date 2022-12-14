import React from 'react';
import Link from 'next/link'
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
                                    <Link href={'/building'}>About Fira Labs DAO</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Message from Community</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Members and Associates</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Partners</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Join our DAO</Link>
                                </p>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Commitments</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Sustainability Strategy</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Corporate Social Responsibility</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Empowerment of oMembers</Link>
                                </p>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Fun Lab</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Win a POAP</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Business Advancement</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Business model strategy</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Market and consumer research</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Roadmap for go-to market initiatives</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>DAO’s and Token Economics</Link>
                                </p>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Growth Marketing</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Community building</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Metaverse activation campaign</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Content creation</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Giveaway campaigns</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Influencer marketing</Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Software Development</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>dApp Development</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Token Design and DAO governance</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Smart Contracts</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Protocol Design</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Decentralized Websites</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>NFT Marketplace and Minting</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>DEXs & DeFi</Link>
                                </p>
                            </div>
                        </div>

                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Resources</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Case Studies</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Use Cases</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Blog</Link>
                                </p>

                            </div>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.category}>
                            <h2 className={styles.categoryTitle}>Technologies</h2>
                            <div className={styles.categoryItems}>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>React.js</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>React Native</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Nest.js</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Node.js</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Angular 2+</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Vue.js</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Swift</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>PHP (Laravel)</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Python (Django)</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Java</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Solidity</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Rust</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Ruby on Rails</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>C++</Link>
                                </p>
                                <p className={styles.categoryItem}>
                                    <Link href={'/building'}>Golang</Link>
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
                    <Link href={'/building'} className={styles.footerCopySectionLink}>Privacy Policy</Link>
                    <Link href={'/building'} className={styles.footerCopySectionLink}>Terms Of Service</Link>
                    <Link href={'/building'} className={styles.footerCopySectionLink}>Non Disclosure Agreement</Link>
                    <Link href={'/building'} className={styles.footerCopySectionLink}>Acceptable User Policy</Link>
                    <Link href={'/building'} className={styles.footerCopySectionLink}>Information Audit Document</Link>
                    <Link href={'/building'} className={styles.footerCopySectionLink}>Data Processing Agreement</Link>
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