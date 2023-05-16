import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='language' content='en' />
          <meta name='description' content='The best IT store out there.' />
          <meta
            name='keywords'
            content='it, gmag, computer, laptop, gaming, pc'
          />
          <meta
            httpEquiv='Content-Security-Policy'
            content="font-src * 'unsafe-inline';"
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
