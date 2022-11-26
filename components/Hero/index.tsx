import styles from './index.module.scss'
import Galaxy from "../Galaxy";

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <Galaxy
                title={'The Web3 Innovation Hub'}
                description={'Capture the potential from a growing decentralized token economy'}
            />
        </div>
    )
}

export default Hero;