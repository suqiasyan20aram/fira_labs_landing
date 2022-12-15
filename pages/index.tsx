import Head from 'next/head'import styles from '../styles/Home.module.scss'import Hero from "../components/Hero";import Help from "../components/Help";import Process from "../components/Process";import Expect from "../components/Expect";import Line from "../components/Line";import Authors from "../components/Authors";import Dao from "../components/Dao";import Services from "../components/Services";import Industries from "../components/Industries";import ContactUs from "../components/ContactUs";import Menu from "../components/Menu";import Header from "../components/Header";import {useState} from "react";import Footer from "../components/Footer";export default function Home() {    const [menuIsShown, setMenuIsShown] = useState(false);    const toggleMenu = (shown: boolean) => {        setMenuIsShown(shown)    }    return (        <div className={styles.container}>            <Head>                <title>Create Next App</title>                <meta name="description" content="Generated by create next app"/>                <link rel="icon" href="/favicon.ico"/>            </Head>            <Menu menuIsShown={menuIsShown} onClose={() => toggleMenu(false)}/>            <Header animated={true} menuIsShown={menuIsShown} toggleMenu={toggleMenu}/>            <Hero/>            <Help/>            <Process/>            <Expect/>            <Line/>            <Authors/>            <Dao/>            <Services/>            <Industries/>            <ContactUs/>            <Footer/>        </div>    )}