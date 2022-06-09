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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}



/*import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;900&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}*/