import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            httpEquiv='Content-Security-Policy'
            content="font-src 'self' https://fonts.googleapis.com"
          />
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <meta name='language' content='en' />
          <meta name='description' content='The best IT store out there.' />
          <meta
            name='keywords'
            content='it, gmag, computer, laptop, gaming, pc'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
