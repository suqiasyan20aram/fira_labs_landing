import React, {FC, useEffect, useRef, useState} from "react";
import gsap from "gsap";
import Image from "next/image";
import classNames from "classnames";

import styles from './index.module.scss'
import logo from '../../assets/images/decentures_with_text.svg'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

interface HeaderProps {
    menuIsShown: boolean,
    toggleMenu: (shown: boolean) => void
}

gsap.registerPlugin(ScrollTrigger);

const Header: FC<HeaderProps> = ({menuIsShown, toggleMenu}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (element) {
            let animation = gsap.fromTo(element.querySelector(`.${styles.header}`),
                {
                    backgroundColor: 'rgba(255,255,255,0)'
                },
                {
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    scrollTrigger: {
                        trigger: element,
                        start: "bottom top",
                        end: "bottom+=200 top",
                        scrub: 1,
                    }
                }
            );

            return () => {
                !!animation && animation.kill();
            }
        }
    }, []);

    return (
        <div ref={ref} className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={styles.headerMain}>
                    <div className={classNames([styles.headerMenu, {[styles.headerMenuOpen]: menuIsShown}])}>
                        <label onClick={() => toggleMenu(!menuIsShown)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className={styles.headerLogo}>
                        <Image src={logo} alt={'logo'} height={40}/>
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
                        <span
                            className={classNames('text-16', 'text-black', 'cursor-pointer', styles.headerSocialIcon)}>LET’S TALK</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;