import {FC} from "react";

import styles from "./index.module.scss";

interface GalaxyProps {
    title: string;
    description: string;
}

const Galaxy: FC<GalaxyProps> = ({title, description}) => {
    return (
        <div className={styles.cosmos}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.description}>{description}</h2>
            <div className={styles.galaxy}>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                    <div className={styles.orbit}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                    <div className={styles.orbit}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                    <div className={styles.orbit}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                    <div className={styles.orbit}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                    <div className={styles.orbit}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                    <div className={styles.orbit}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                    <div className={styles.orbit}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                    <div className={styles.orbit}></div>
                </div>
                <div className={styles.box}>
                    <div className={styles.planet}>
                        <div className={styles.cube}>
                            <div className={styles.face}></div>
                            <div className={styles.face}></div>
                        </div>
                    </div>
                    <div className={styles.orbit}></div>
                </div>
            </div>
        </div>
    )
}

export default Galaxy