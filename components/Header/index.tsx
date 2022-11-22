import Image from "next/image";

import styles from './index.module.scss'

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={styles.headerMain}>
                    <div style={{width: 152}}></div>
                    <div className={styles.headerLogo}>
                        <svg width="134" height="50" viewBox="0 0 590 220" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M121.252 24.2554V55.9447H39.6454V106.143H102.183V137.271H39.6454V220H0.384293V24.2554H121.252ZM191.158 64.6382V220H151.897V64.6382H191.158ZM333.709 220L290.522 143.721H272.013V220H232.752V24.2554H306.226C321.37 24.2554 334.27 26.9663 344.927 32.388C355.583 37.6229 363.529 44.8207 368.764 53.9816C374.186 62.9556 376.896 73.0513 376.896 84.2688C376.896 97.1688 373.157 108.854 365.679 119.323C358.201 129.606 347.077 136.71 332.307 140.636L379.14 220H333.709ZM272.013 114.275H304.824C315.481 114.275 323.427 111.752 328.661 106.704C333.896 101.469 336.514 94.271 336.514 85.1101C336.514 76.1361 333.896 69.2187 328.661 64.3578C323.427 59.3099 315.481 56.786 304.824 56.786H272.013V114.275ZM535.238 182.702H457.277L444.376 220H403.152L473.542 23.9749H519.253L589.643 220H548.138L535.238 182.702ZM524.581 151.293L496.257 69.4057L467.933 151.293H524.581Z"
                                fill="#F3F3F3"/>
                            <g className={styles.headerLogoBall}>
                                <path
                                    d="M171.808 46.1294C164.89 46.1294 159.095 43.9794 154.421 39.6794C149.934 35.1924 147.69 29.6771 147.69 23.1336C147.69 16.5901 149.934 11.1683 154.421 6.86832C159.095 2.38134 164.89 0.13785 171.808 0.13785C178.725 0.13785 184.427 2.38134 188.914 6.86832C193.588 11.1683 195.925 16.5901 195.925 23.1336C195.925 29.6771 193.588 35.1924 188.914 39.6794C184.427 43.9794 178.725 46.1294 171.808 46.1294Z"
                                    fill="#F3F3F3"/>
                                <circle cx="162" cy="16" r="4" fill={'#808cff'} className={styles.eye}/>
                                <circle cx="180" cy="16" r="4" fill={'#808cff'} className={styles.eye}/>
                            </g>
                        </svg>
                        <span className={styles.headerLogoPart}>LABS</span>
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
            </div>
        </div>
    )
}

export default Header;