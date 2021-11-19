require("windi.css")

import Head from "next/head"
import Footer from "../components/footer"

export default function App({Component, pageProps}) {
    return <>
        <Head>
            <title>phoeniix.dev</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <main>
            <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:px-8">
                <div className="gap-2">
                    <Component {...pageProps} />
                </div>
            </div>
        </main>
        <Footer/>
    </>
}
