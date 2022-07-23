import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { head } from '../../details'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          {/* links */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+JP:wght@300;400&display=swap" rel="stylesheet" />

          {/* meta tags */}
          <meta name="title" content={head.title} />
          <meta name="description" content={head.description} />
          <meta name="keywords" content={head.keywords} />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="5 days" />
          <meta name="author" content="nudlツ" />

          {/* og meta tags */}
          <meta property="og:title" content={head.title} />
          <meta property="og:url" content={head.url} />
          <meta property="og:image" content={head.image} />

          {/* twitter meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={head.title} />
          <meta name="twitter:description" content={head.description} />
          <meta name="twitter:image" content={head.image} />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript initialColorMode='dark' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
