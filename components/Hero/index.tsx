import styles from './index.module.scss'
import Galaxy from "../Galaxy";
import Button from "../Button";

const Hero = () => {
    return (
        <div className={styles.heroWrapper}>
            <Galaxy
                title={'The Web3 Innovation Hub'}
                description={'Capture the potential from a growing decentralized token economy'}
            />
            <div className={styles.actions}>
                <Button text={'CASE STUDIES'} variant={'primary'}/>
                <Button text={'TALK TO US'} variant={'primary-outline'}/>
            </div>
        </div>
    )
}

export default Hero;