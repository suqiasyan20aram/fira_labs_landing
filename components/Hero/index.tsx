import {useState} from "react";
import Image from "next/image";

import styles from './index.module.scss'
import firaLogoPart1 from '../../assets/images/logo-part-1.svg'
import firaLogoPart2 from '../../assets/images/logo-part-2.svg'
import Galaxy from "../Galaxy";
import classNames from "classnames";

const Hero = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = (open: boolean) => {
        setOpen(open)
    }

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={classNames([styles.headerMenu, {[styles.headerMenuOpen]: open}])}>
                    <label onClick={() => toggleMenu(!open)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className={styles.headerLogo}>
                    <Image src={firaLogoPart1} alt={'logo'} width={80}/>
                    <Image src={firaLogoPart2} alt={'logo'} width={80} style={{marginLeft: 10}}/>
                </div>
                <div className={styles.headerSocials}>
                    <span className={styles.headerSocialIcon}>
                        <i className={'icon-telegram'}></i>
                    </span>
                    <span className={styles.headerSocialIcon}>
                        <i className={'icon-twitter'}></i>
                    </span>
                    <span className={styles.headerSocialIcon}>
                        <i className={'icon-linkedin'}></i>
                    </span>
                </div>
            </div>
            <Galaxy
                title={'The Web3 Innovation Hub'}
                description={'We help companies to build on web3 technology and capture the potential from a growing decentralized token economy.'}
            />
        </div>
    )
}

export default Hero;