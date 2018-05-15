import Document, { Head, Main, NextScript } from "next/document"
import ExternalScripts from "../components/ExternalScripts/ExternalScripts"

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="theme-color" content="#343e46" />
          {/* iPhone(first generation or 2G), iPhone 3G, iPhone 3GS --> */}
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/static/icons/icon57.png"
          />
          {/* iPad and iPad mini @1x */}
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/static/icons/icon76.png"
          />
          {/* iPhone 4, iPhone 4s, iPhone 5, iPhone 5c, iPhone 5s, iPhone 6, iPhone 6s, iPhone 7, iPhone 7s, iPhone8 */}
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/icons/icon120.png"
          />
          {/* iPad and iPad mini @2x */}
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/icons/icon152.png"
          />
          {/* iPad Pro */}
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/static/icons/icon167.png"
          />
          {/* iPhone X, iPhone 8 Plus, iPhone 7 Plus, iPhone 6s Plus, iPhone 6 Plus */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/icons/icon180.png"
          />
          {/* Android Devices High Resolution */}
          <link rel="icon" sizes="192x192" href="/static/icons/icon192.png" />
          {/* Android Devices Normal Resolution */}
          <link rel="icon" sizes="128x128" href="/static/icons/icon128.png" />
          <meta name="apple-mobile-web-app-title" content="Gabriel Duarte" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="/static/manifest.json" />
          <meta
            name="Description"
            content="This is a portfolio that gives you information about who Gabriel Duarte is, and all of his latest works."
          />
          <title>Gabriel Duarte&apos;s Portfolio</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/modern-normalize@0.4.0/modern-normalize.min.css"
            rel="stylesheet"
          />
          <ExternalScripts />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument
