import Document, { Head, Main, NextScript } from "next/document"

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          {process.env.NODE_ENV === "production" && (
            <React.Fragment>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-106120004-2"
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-106120004-2');`,
                }}
              />
            </React.Fragment>
          )}

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <meta
            name="Description"
            content="Information about Gabriel Duarte and his works"
          />
          <title>Gabriel Duarte's Portfolio</title>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500"
            rel="stylesheet"
          />
          <link
            href="https://cdn.jsdelivr.net/npm/modern-normalize@0.4.0/modern-normalize.min.css"
            rel="stylesheet"
          />
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
