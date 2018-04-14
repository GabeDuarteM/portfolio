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
          <meta charset="UTF-8" />
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
          <link href="https://unpkg.com/modern-normalize" rel="stylesheet" />
          <style jsx global>{`
            body {
              font-family: Montserrat !important;
              font-size: 20px;
            }
          `}</style>
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
