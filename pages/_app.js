require("windi.css")

import Head from "next/head"
import Navigation from "../components/navigation"
import Footer from "../components/footer"

export default function App({Component, pageProps}) {
    return <>
        <Head>
            <title>PHOENiX's Website</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Navigation Emby="https://media.phoeniix.dev:8443" Plex="https://media.phoeniix.dev:2096" />
        <main>
            <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:px-8">
                <div className="gap-2">
                    <Component {...pageProps} />
                </div>
            </div>
        </main>
        <Footer/>
    </>
}
