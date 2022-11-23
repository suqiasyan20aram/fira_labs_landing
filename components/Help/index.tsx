import styles from './index.module.scss'

const Help = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.containerInner}>
                    <h2 className={styles.title}>We help to transform your business</h2>
                    <p className={styles.description}>
                        Our experts will help your business find a new vector for growth by
                        planning and executing a new advancement strategy using cutting-edge technology and growth
                        techniques
                        used in web3 space
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Help;