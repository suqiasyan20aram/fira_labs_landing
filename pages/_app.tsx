import type {AppProps} from 'next/app'
import Head from "next/head";

import '../styles/globals.scss'

export default function App({Component, pageProps}: AppProps) {
    return (
        <div>
            <Head>
                <title>Decentures Ltd.</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Component {...pageProps} />
        </div>
    )

}
