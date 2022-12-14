import styles from './index.module.scss'
import Galaxy from "../Galaxy";
import Button from "../Button";
import {useRouter} from "next/router";

const Hero = () => {
    const router = useRouter();

    const navigate = () => {
        router.push('/building')
    }

    return (
        <div className={styles.heroWrapper}>
            <Galaxy
                title={'The Web3 Innovation Hub'}
                description={'Capture the potential from a growing decentralized token economy'}
            />
            <div className={styles.actions}>
                <Button text={'CASE STUDIES'} variant={'primary'} onClick={navigate}/>
                <Button text={'TALK TO US'} variant={'primary-outline'} onClick={navigate}/>
            </div>
        </div>
    )
}

export default Hero;