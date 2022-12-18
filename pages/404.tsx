import React, {useEffect} from "react";
import Head from 'next/head'
import Link from "next/link";
import Image from "next/image";

import styles from '../styles/404.module.scss'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.stars}>
                <div className={styles.centralBody}>
                    <Image
                        width={300}
                        height={300}
                        alt={'image'}
                        className="image-404"
                        src="http://salehriaz.com/404Page/img/404.svg"
                    />
                    <Link rel={'noreferrer'} href="/" className={styles.btnGoHome}>
                        GO BACK HOME
                    </Link>
                </div>
                <div className="objects">
                    <Image
                        width={40}
                        height={40}
                        alt={'image'}
                        className={styles.object_rocket}
                        src="http://salehriaz.com/404Page/img/rocket.svg"
                    />
                    <div className="earth-moon">
                        <Image
                            alt={'image'}
                            width={100}
                            height={100}
                            className={styles.object_earth}
                            src="http://salehriaz.com/404Page/img/earth.svg"
                        />
                        <Image
                            width={80}
                            height={80}
                            alt={'image'}
                            className={styles.object_moon}
                            src="http://salehriaz.com/404Page/img/moon.svg"
                        />
                    </div>
                    <div className={styles.box_astronaut}>
                        <Image
                            alt={'image'}
                            width={140}
                            height={140}
                            className={styles.object_astronaut}
                            src="http://salehriaz.com/404Page/img/astronaut.svg"
                        />
                    </div>
                </div>
                <div className={styles.glowing_stars}>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>
                    <div className={styles.star}></div>

                </div>

            </div>
        </div>
    )
}
