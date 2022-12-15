import styles from './index.module.scss'
import Galaxy from "../Galaxy";
import Button from "../Button";

const Hero = () => {
    const caseStudiesHandler = () => {
        window.open('https://www.web3labs.com/casestudies')
    }

    const talkToUsHandler = () => {
        const section: HTMLDivElement | null = document.querySelector(`#section-contact`);
        if (section) {
            const top = section.offsetTop - 66;
            window.scrollTo({top, behavior: 'smooth'});
        }
    }

    return (
        <div className={styles.heroWrapper}>
            <Galaxy
                title={'The Web3 Innovation Hub'}
                description={'Capture the potential from a growing decentralized token economy'}
            />
            <div className={styles.actions}>
                <Button text={'CASE STUDIES'} variant={'primary'} onClick={caseStudiesHandler}/>
                <Button text={'TALK TO US'} variant={'primary-outline'} onClick={talkToUsHandler}/>
            </div>
        </div>
    )
}

export default Hero;