import React, {useEffect} from "react";
import Head from 'next/head'
import {TweenMax, TimelineMax, Expo} from 'gsap'

import styles from '../styles/Building.module.scss'

export default function Home() {

    useEffect(() => {

        var tl = new TimelineMax({});
        tl.addLabel('start', 0)
            .add(TweenMax.from(`.${styles.takeoff}`, 0.5, {scaleY: 0, y: -200, ease: Expo.easeInOut, delay: 3}))
            .add(TweenMax.to(`.${styles.smoke}`, 2, {y: -50, delay: 1}))
            .add(TweenMax.to(`.${styles.rocket}`, 1, {y: -300, delay: -1}))
            .add(TweenMax.to(`.${styles.takeoff}`, 1, {y: -300, delay: -1}))
            .add(TweenMax.to(`.${styles.smoke}`, 5, {scale: 1, y: -20, delay: -1}))
            .add(TweenMax.to(`.${styles.rocket}`, 1, {y: -10, rotate: 0, delay: -3}))
            .add(TweenMax.to(`.${styles.takeoff}`, 0.2, {opacity: 0, delay: -3}))
            .add(TweenMax.to(`.${styles.stars}`, 0.2, {opacity: 0, delay: -3}))
            .add(TweenMax.from(`.${styles.stars2}`, 0.2, {opacity: 0, delay: -3}))
            .add(TweenMax.to(`.${styles.artboard}`, 0.2, {rotation: 40, delay: -3}))
            .add(TweenMax.to(`.${styles.smoke}`, 2, {opacity: 0, delay: -2}))
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p className={styles.title}>THE FUTURE IS DECENTRALIZED</p>
                <h1 className={styles.description}>EXCUSE US, WE ARE BUILDING.</h1>
                <div className={styles.illustration}>
                    <div className={styles.artboard}>
                        <div className={styles.stars}>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                            <div className={styles.star}></div>
                        </div>
                        <div className={styles.stars2}>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                            <div className={styles.shootingstar}></div>
                        </div>


                        <div className={styles.fire}></div>
                        <div className={styles.takeoff}></div>

                        <div className={styles.smoke}>
                            <div className={styles.smokeBubble} id="sb1"></div>
                            <div className={styles.smokeBubble} id="sb2"></div>
                            <div className={styles.smokeBubble} id="sb3"></div>
                            <div className={styles.smokeBubble} id="sb4"></div>
                            <div className={styles.smokeBubble} id="sb5"></div>
                            <div className={styles.smokeBubble} id="sb6"></div>
                            <div className={styles.smokeBubble} id="sb7"></div>
                            <div className={styles.smokeBubble} id="sb8"></div>
                            <div className={styles.smokeBubble} id="sb9"></div>
                            <div className={styles.smokeBubble} id="sb10"></div>
                            <div className={styles.smokeBubble} id="sb11"></div>
                            <div className={styles.smokeBubble} id="sb12"></div>
                        </div>

                        <svg id="rocket" className={styles.rocket} xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 154.1 259.1"
                             enableBackground="new 0 0 154.1 259.1">
                            <style>{'.st0{fill:#18F4A3;} .st1{fill:#E8E6EF;} .st2{filter:url(#Adobe_OpacityMaskFilter);} .st3{filter:url(#Adobe_OpacityMaskFilter_1_);} .st4{mask:url(#SVGID_1_);fill:url(#SVGID_2_);} .st5{opacity:0.61;fill:#CFE0E2;} .st6{opacity:0.7;fill:#012226;} .st7{filter:url(#Adobe_OpacityMaskFilter_2_);} .st8{filter:url(#Adobe_OpacityMaskFilter_3_);} .st9{mask:url(#SVGID_3_);fill:url(#SVGID_4_);} .st10{fill:url(#SVGID_5_);} .st11{fill:#063A3A;} .st12{fill:#049F75;}'}</style>
                            <path className={styles.st0}
                                  d="M97.4 236.1c0 2.6-5.2 4.7-11.7 4.7H70.3c-6.4 0-11.7-2.1-11.7-4.7v-4.5c0-2.6 5.2-4.7 11.7-4.7h15.4c6.4 0 11.7 2.1 11.7 4.7v4.5zM37.1 137.4s-28 19.2-28 32v59.3l30-30-2-61.3zM117.5 137.4s28 19.2 28 32v59.3l-30-30 2-61.3z"/>
                            <path className={styles.st1}
                                  d="M29.6 140.5c.3 36.4 8.3 69.6 21.3 95.3 8.6-2.8 17.7-4.4 27.2-4.4 9.5-.1 18.6 1.3 27.3 4 12.5-25.9 19.9-59.3 19.6-95.6-.6-57.8-20.4-107.7-48.8-132-28.1 24.8-47.1 75-46.6 132.7z"/>
                            <defs>
                                <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="44.2" y="62.7"
                                        width="28.1" height="171">
                                    <feFlood result="back" floodColor="#fff" floodOpacity="1"/>
                                    <feBlend in="SourceGraphic" in2="back"/>
                                </filter>
                            </defs>
                            <mask maskUnits="userSpaceOnUse" x="44.2" y="62.7" width="28.1" height="171" id="SVGID_1_">
                                <g className={styles.st2}>
                                    <defs>
                                        <filter id="Adobe_OpacityMaskFilter_1_" filterUnits="userSpaceOnUse" x="44.2"
                                                y="62.7" width="28.1" height="171">
                                            <feFlood result="back" floodColor="#fff" floodOpacity="1"/>
                                            <feBlend in="SourceGraphic" in2="back"/>
                                        </filter>
                                    </defs>
                                    <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="719.881"
                                                    y1="-755.102" x2="616.624" y2="-640.129"
                                                    gradientTransform="rotate(-41.77 1486.062 530.152)">
                                        <stop offset="0" stopColor="gray"/>
                                        <stop offset=".145" stopColor="#7A7A7A"/>
                                        <stop offset=".338" stopColor="#696969"/>
                                        <stop offset=".556" stopColor="#4E4E4E"/>
                                        <stop offset=".792" stopColor="#282828"/>
                                        <stop offset="1"/>
                                    </linearGradient>
                                    <path className={styles.st4}
                                          d="M60.2 233.7l12-1.9c-18.3-108.4-8.6-169-8.6-169l-11.4.4c-22 76.5 8 170.5 8 170.5z"/>
                                </g>
                            </mask>
                            <path className={styles.st5}
                                  d="M60.2 233.7l12-1.9c-18.3-108.4-8.6-169-8.6-169l-11.4.4c-22 76.5 8 170.5 8 170.5z"/>
                            <path className={styles.st6}
                                  d="M41.5 64l-2.1 6.7s40.7-5 75.7.1l-3.2-7.4c-.1 0-47.1-5.4-70.4.6z"/>
                            <path className={styles.st0}
                                  d="M41.5 64c11.4-.9 23.2-1.4 35.2-1.5 12-.1 23.7.2 35.2.9-8.6-23.7-21-43-35.6-55.6C61.7 20.6 49.7 40.2 41.5 64z"/>
                            <defs>
                                <filter id="Adobe_OpacityMaskFilter_2_" filterUnits="userSpaceOnUse" x="52.2" y="7.8"
                                        width="24" height="55.3">
                                    <feFlood result="back" floodColor="#fff" floodOpacity="1"/>
                                    <feBlend in="SourceGraphic" in2="back"/>
                                </filter>
                            </defs>
                            <mask maskUnits="userSpaceOnUse" x="52.2" y="7.8" width="24" height="55.3" id="SVGID_3_">
                                <g className={styles.st7}>
                                    <defs>
                                        <filter id="Adobe_OpacityMaskFilter_3_" filterUnits="userSpaceOnUse" x="52.2"
                                                y="7.8" width="24" height="55.3">
                                            <feFlood result="back" floodColor="#fff" floodOpacity="1"/>
                                            <feBlend in="SourceGraphic" in2="back"/>
                                        </filter>
                                    </defs>
                                    <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="739.606"
                                                    y1="-771.977" x2="769.629" y2="-799.072"
                                                    gradientTransform="rotate(-41.77 1486.062 530.152)">
                                        <stop offset="0" stopColor="gray"/>
                                        <stop offset=".145" stopColor="#7A7A7A"/>
                                        <stop offset=".338" stopColor="#696969"/>
                                        <stop offset=".556" stopColor="#4E4E4E"/>
                                        <stop offset=".792" stopColor="#282828"/>
                                        <stop offset="1"/>
                                    </linearGradient>
                                    <path className={styles.st9}
                                          d="M63.6 62.7C65.7 35.3 76.2 7.8 76.2 7.8c-18.9 24.2-24 55.3-24 55.3l11.4-.4z"/>
                                </g>
                            </mask>
                            <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="739.606" y1="-771.977"
                                            x2="769.629" y2="-799.072"
                                            gradientTransform="rotate(-41.77 1486.062 530.152)">
                                <stop offset="0" stopColor="#EAEFEE"/>
                                <stop offset=".45" stopColor="#F0F3F3"/>
                                <stop offset="1" stopColor="#FFF"/>
                            </linearGradient>
                            <path className={styles.st10}
                                  d="M63.6 62.7C65.7 35.3 76.2 7.8 76.2 7.8c-18.9 24.2-24 55.3-24 55.3l11.4-.4z"/>
                            <path className={styles.st11}
                                  d="M75.9 78.3c-14.8.1-26.7 12.2-26.6 27 .1 14.8 12.2 26.7 27 26.6 14.8-.1 26.7-12.2 26.5-27-.1-14.9-12.2-26.8-26.9-26.6z"/>
                            <path className={styles.st12}
                                  d="M75.9 86.4c-10.3.1-18.5 8.5-18.5 18.8.1 10.3 8.5 18.5 18.8 18.4 10.3-.1 18.5-8.5 18.4-18.8 0-10.2-8.4-18.5-18.7-18.4z"/>
                            <path className={styles.st0}
                                  d="M68.6 122.1c2.3 1 4.9 1.6 7.7 1.6 10.3-.1 18.5-8.5 18.4-18.8 0-3.6-1.1-7-3-9.9-.3.3-.7.5-1 .8-8.1 6.6-18.2 15.6-22.1 26.3z"/>
                            <path className="st11"
                                  d="M79 139.9c-11.1.1-20 9.2-19.9 20.3.1 11.1 9.2 20 20.3 19.9 11.1-.1 20-9.2 19.9-20.3-.1-11-9.2-20-20.3-19.9z"/>
                            <path className={styles.st12}
                                  d="M79.1 146.1c-7.7.1-13.9 6.4-13.8 14.1.1 7.7 6.4 13.9 14.1 13.8 7.7-.1 13.9-6.4 13.8-14.1-.1-7.7-6.4-13.9-14.1-13.8z"/>
                            <path className={styles.st0}
                                  d="M73.5 172.8c1.8.8 3.7 1.2 5.8 1.2 7.7-.1 13.9-6.4 13.8-14.1 0-2.7-.8-5.3-2.2-7.4-.3.2-.5.4-.8.6-6 4.9-13.6 11.7-16.6 19.7z"/>
                            <path className={styles.st11}
                                  d="M81.5 187.9c-7.8.1-14.1 6.5-14 14.3.1 7.8 6.5 14.1 14.3 14.1 7.8-.1 14.1-6.5 14-14.3-.1-7.8-6.5-14.2-14.3-14.1z"/>
                            <path className={styles.st12}
                                  d="M81.5 192.2c-5.4 0-9.8 4.5-9.8 9.9s4.5 9.8 9.9 9.8 9.8-4.5 9.8-9.9-4.5-9.8-9.9-9.8z"/>
                            <path className={styles.st0}
                                  d="M77.6 211.1c1.2.5 2.6.9 4.1.8 5.4 0 9.8-4.5 9.8-9.9 0-1.9-.6-3.7-1.6-5.2-.2.1-.4.3-.5.4-4.3 3.5-9.7 8.3-11.8 13.9z"/>
                        </svg>
                    </div>
                </div>
                <p className={styles.copyRight}>
                    ?? 2023 Decentures Ltd. All Rights Reserved.
                </p>
            </div>
        </div>
    )
}
