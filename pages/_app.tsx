import type {AppProps} from 'next/app'
import {useState} from "react";

import '../styles/globals.scss'
import Menu from "../components/Menu";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({Component, pageProps}: AppProps) {
    const [menuIsShown, setMenuIsShown] = useState(false);

    const toggleMenu = (shown: boolean) => {
        setMenuIsShown(shown)
    }

    return (
        <div>
            <Menu menuIsShown={menuIsShown} toggleMenu={toggleMenu}/>
            <Header animated={true} menuIsShown={menuIsShown} toggleMenu={toggleMenu}/>
            <Component {...pageProps} />
            <Footer/>
        </div>
    )

}
