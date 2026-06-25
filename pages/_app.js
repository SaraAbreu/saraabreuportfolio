import '../styles/globals.css';
import '../styles/aesthetic.css';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-black/70 focus:text-white px-3 py-2 rounded-md"
      >
        Ir al contenido
      </a>
      <Head>
        <title>Sara Abreu — Desarrolladora Full Stack | Tenerife</title>
        <meta
          name="description"
          content="Sara Abreu, desarrolladora Full Stack en Tenerife. Aplicaciones web con React y Next.js, plataformas multiplataforma, automatizaciones e integraciones IA."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        {/* Open Graph */}
        <meta property="og:title" content="Sara Abreu — Desarrolladora Full Stack | Tenerife" />
        <meta property="og:description" content="Aplicaciones web con React y Next.js, plataformas multiplataforma, automatizaciones e integraciones IA." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.portfoliosaraabreu.com" />
        <meta property="og:image" content="https://www.portfoliosaraabreu.com/images/trabajo.png" />
        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sara Abreu — Desarrolladora Full Stack | Tenerife" />
        <meta name="twitter:description" content="Aplicaciones web con React y Next.js, plataformas multiplataforma, automatizaciones e integraciones IA." />
        <meta name="twitter:image" content="https://www.portfoliosaraabreu.com/images/trabajo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
