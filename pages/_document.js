import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;900&display=swap" rel="stylesheet"/>
          {this.props.styleTags}
        </Head>
        <Head>
          <meta property="og:image" content="https://github.com/Aerolab/frontend-developer-coding-challenge/blob/main/assets/github-cover-aerolab-frontend-developer-coding-challenge.png"/>
          <meta property="og:title" content="Aerolab Challenge"/>
          <meta property="og:image:width" content="600"/>
          <meta property="og:image:height" content="250"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
