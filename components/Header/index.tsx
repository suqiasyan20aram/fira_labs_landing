import {FC, useEffect, useRef, useState} from "react";
import gsap from "gsap";
import Image from "next/image";
import classNames from "classnames";

import styles from './index.module.scss'
import firaLogoPart1 from '../../assets/images/logo-part-1.svg'
import firaLogoPart2 from '../../assets/images/logo-part-2.svg'
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

interface HeaderProps {
    animated?: boolean
}

gsap.registerPlugin(ScrollTrigger);

const Header: FC<HeaderProps> = ({animated}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);

    const toggleMenu = (open: boolean) => {
        setOpen(open)
    }

    useEffect(() => {
        const element = ref.current;
        if (animated && element) {
            let animation = gsap.fromTo(element.querySelector(`.${styles.headerOverlay}`),
                {
                    scaleX: 1,
                    scaleY: 0,
                },
                {
                    scaleX: 1,
                    scaleY: 1,
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
                <div className={styles.headerOverlay}/>
                <div className={styles.headerMain}>
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
                        <span
                            className={classNames('text-16', 'text-black', 'cursor-pointer', styles.headerSocialIcon)}>LET’S TALK</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;