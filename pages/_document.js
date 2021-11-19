import Document, { Html, Head, Main, NextScript } from 'next/document'

const INTER_FONT = "https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap"

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href={INTER_FONT} rel="preload" as="style"/>
                    <link href={INTER_FONT} rel="stylesheet" media="print" onLoad="this.media='all'"/>
                    <noscript>
                        <link href={INTER_FONT} rel="stylesheet"/>
                    </noscript>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
