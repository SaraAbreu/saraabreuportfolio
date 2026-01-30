import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head />
        <body className="palette-warm serif-playfair preview-palette">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
